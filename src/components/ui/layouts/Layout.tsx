import { NextSeo } from 'next-seo';
import Header from './Header';
import { Inter, Bitter } from 'next/font/google';
import Footer from './Footer';
import { Toaster } from 'react-hot-toast';
import Head from 'next/head';

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
