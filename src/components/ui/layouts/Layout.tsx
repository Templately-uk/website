import { NextSeo } from 'next-seo';
import { Bitter, Inter } from 'next/font/google';
import Head from 'next/head';
import CookieConsent from 'react-cookie-consent';
import { Toaster } from 'react-hot-toast';
import Footer from './Footer';
import Header from './Header';

const inter = Inter({
	subsets: ['latin'],
	variable: '--font-sans',
});
const bitter = Bitter({
	subsets: ['latin'],
	variable: '--font-sans',
});
interface Props {
	title?: string;
	children: React.ReactNode;
	description?: string;
	onlyMain?: boolean;
	openGraph?: any;
}
const Layout: React.FC<Props> = ({ title, children, description, onlyMain = false, openGraph }) => {
	return (
		<>
			<Head>
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" type="image/svg+xml" href="/favicon.svg" />
				<link rel="icon" type="image/png" href="/favicon.png"></link>
			</Head>
			<Toaster />
			{title && <NextSeo title={title} description={description} openGraph={openGraph} />}
			<div className="min-h-screen">
				{!onlyMain && <Header />}
				<main className="text-sm sm:text-base md:text-lg">{children}</main>
				{!onlyMain && <Footer />}
				<CookieConsent style={{ background: 'black' }} buttonStyle={{ background: 'white' }}>
					This website uses cookies to enhance the user experience.
				</CookieConsent>
			</div>
			<style jsx global>
				{`
					:root {
						--font-sans: ${inter.style.fontFamily};
						--font-serif: ${bitter.style.fontFamily};
					}
				`}
			</style>
		</>
	);
};

export default Layout;
