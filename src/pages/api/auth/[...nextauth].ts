import NextAuth, { NextAuthOptions } from 'next-auth';
import GithubProvider from 'next-auth/providers/github';
import FacebookProvider from 'next-auth/providers/facebook';
import { PrismaAdapter } from '@auth/prisma-adapter';
import prisma from '../../../lib/prisma';
import type { Adapter } from 'next-auth/adapters';

export const authOptions: NextAuthOptions = {
	secret: process.env.NEXTAUTH_SECRET,
	providers: [
		GithubProvider({
			clientId: process.env.GITHUB_ID as string,
			clientSecret: process.env.GITHUB_SECRET as string,
		}),
		FacebookProvider({
			clientId: process.env.FACEBOOK_CLIENT_ID as string,
			clientSecret: process.env.FACEBOOK_CLIENT_SECRET as string,
		}),
	],
	adapter: PrismaAdapter(prisma) as Adapter<boolean>,
	callbacks: {
		session: async ({ session, user }) => {
			session.user.id = user.id;
			return session;
		},
	},
	pages: {},
};
export default NextAuth(authOptions);
