import { getAuth } from '@clerk/nextjs/server';
import httpProxy from 'http-proxy';
import dotenv from 'dotenv';

dotenv.config(); // Load environment variables from.env file

// eslint-disable-next-line no-undef
const API_URL = process.env.API_URL; // The actual URL of your API
// eslint-disable-next-line no-undef
const API_SECRET = process.env.API_SECRET; // The actual URL of your API

if (!(API_URL && API_SECRET)) {
	throw new Error('The API_URL and API_SECRET environment variable are required but was not specified.');
} else {
	console.log('API_URL:', API_URL);
	console.log('API_SECRET:', API_SECRET);
}

const proxy = httpProxy.createProxyServer();

export default async function handler(req, res) {
	return new Promise((resolve, reject) => {
		const { userId } = getAuth(req);

		if (!req.url) {
			return reject(new Error('Request URL is not defined'));
		}

		// Update request
		req.url = req.url.replace('/api/proxy', '');
		req.headers['X-API-SECRET'] = API_SECRET;
		req.headers['X-USER-ID'] = String(userId);

		proxy.web(req, res, { target: API_URL, changeOrigin: true }, (err) => {
			if (err) {
				return reject(err);
			}
			resolve();
		});
	});
}
