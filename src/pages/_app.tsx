import '@/styles/globals.scss';
import { ClerkProvider } from '@clerk/nextjs';
import { Analytics } from '@vercel/analytics/react';
import type { AppProps } from 'next/app';
import { QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient();

export default function App({ Component, pageProps: { ...pageProps } }: AppProps) {
	return (
		<ClerkProvider
			{...pageProps}
			appearance={{
				layout: {
					privacyPageUrl: 'https://templately.co.uk/legal/privacy',
					termsPageUrl: 'https://templately.co.uk/legal/conditions',
					logoImageUrl: '/logo.png',
				},
				variables: {
					colorPrimary: 'black',
					fontFamily: 'Inter',
					fontFamilyButtons: 'Inter, sans-serif',
					borderRadius: '0px',
				},
				elements: {
					logoImage: {
						height: '45px',
					},
					logoBox: {},
					card: {
						borderWidth: '2px',
						borderColor: 'black',
						borderStyle: 'solid',
						boxShadow: 'none',
					},
					formFieldInput: {
						borderWidth: '2px',
						borderColor: 'black',
						borderStyle: 'solid',
						boxShadow: 'none',
					},
					avatarBox: {
						border: '2px solid black',
					},
				},
			}}
		>
			<QueryClientProvider client={queryClient}>
				<Component {...pageProps} />;
				<Analytics />
			</QueryClientProvider>
		</ClerkProvider>
	);
}
