import Container from '@/components/ui/layouts/Container';
import Layout from '@/components/ui/layouts/Layout';

const Cookies = () => {
	return (
		<Layout>
			<Container>
				<div className="mt-10 font-serif prose">
					<h1>Cookie Policy</h1>

					<p>Last updated: 13 July, 2023</p>

					<p>
						Templately.co.uk uses cookies on its website. By using the Service, you consent to the use of cookies. This
						Cookies Policy explains what cookies are, how we use cookies, how third-parties we may partner with may use
						cookies on the Service, your choices regarding cookies, and further information about cookies.
					</p>

					<h2>What are cookies?</h2>

					<p>
						Cookies are small pieces of text sent by your web browser by a website you visit. A cookie file is stored in
						your web browser and allows the Service or a third-party to recognize you and make your next visit easier
						and the Service more useful to you.
					</p>

					<h2>How Templately.co.uk uses cookies</h2>

					<p>
						When you use and access the Service, we may place a number of cookies files in your web browser. We use
						cookies for the following purposes: to enable certain functions of the Service, to provide analytics, to
						store your preferences, to enable advertisement delivery, including behavioral advertising.
					</p>

					<h2>Your choices regarding cookies</h2>

					<p>
						If you'd like to delete cookies or instruct your web browser to delete or refuse cookies, please visit the
						help pages of your web browser. Please note, however, that if you delete cookies or refuse to accept them,
						you might not be able to use all of the features we offer, you may not be able to store your preferences,
						and some of our pages might not display properly.
					</p>

					<h2>Where can you find more information about cookies?</h2>

					<p>
						You can learn more about cookies and the following third-party websites:
						<a href="https://www.allaboutcookies.org/">AllAboutCookies</a>: http://www.allaboutcookies.org/
						<a href="https://www.networkadvertising.org/">Network Advertising Initiative</a>:
						http://www.networkadvertising.org/
					</p>
				</div>
			</Container>
		</Layout>
	);
};

export default Cookies;
