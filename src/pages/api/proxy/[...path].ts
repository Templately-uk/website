/**
 * This is a Next.js API route that acts as a proxy to another API.
 * It first checks if the user has a valid Next Auth session, and
 * if authenticated, it proxies the request to the specified API_URL.
 *
 * All request data, including JSON body and URL parameters, are
 * automatically forwarded to the target API.
 *
 * @path /api/proxy/[...path]
 */

import httpProxy from 'http-proxy';
import { getServerSession } from 'next-auth/next';
import type { NextApiRequest, NextApiResponse } from 'next';
import authOptions from '../auth/[...nextauth]';
import { Session } from 'next-auth';

const API_URL = process.env.API_URL;
const API_SECRET = process.env.API_SECRET;

if (!(API_URL && API_SECRET)) {
	throw new Error('The API_URL and API_SECRET environment variable are required but was not specified.');
}

const proxy = httpProxy.createProxyServer();

// Make sure that we don't parse JSON bodies on this route:
export const config = {
	api: {
		bodyParser: false,
	},
};

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
	const session = (await getServerSession(req, res, authOptions)) as Session;

	if (!session) return res.status(401).json({ error: 'Not authenticated with next-auth' });

	// Set custom headers
	req.headers['X-API-SECRET'] = API_SECRET;
	req.headers['X-USER-ID'] = session.user.id;

	// Proceed with proxy if authenticated
	return new Promise<void>((resolve, reject) => {
		if (!req.url) {
			return reject(new Error('Request URL is not defined'));
		}

		req.url = req.url.replace('/api/proxy', '');

		proxy.web(req, res, { target: API_URL, changeOrigin: true }, (err) => {
			console.log(req.url);
			if (err) {
				console.error('Proxy error:', err);
				return reject(err);
			}
			resolve();
		});
	});
}
