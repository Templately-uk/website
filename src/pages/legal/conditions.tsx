import Container from '@/components/ui/layouts/Container';
import Layout from '@/components/ui/layouts/Layout';

const TermsAndConditions = () => {
	return (
		<Layout>
			<Container>
				<div className="mt-10 font-serif prose">
					<h1>Terms and Conditions</h1>
					<p>Last updated: July 13, 2023</p>

					<h2>Acceptance of Terms</h2>
					<p>
						By accessing and using templately.co.uk (“Site”), you accept and agree to be bound by the terms and
						provision of this agreement.
					</p>

					<h2>Provision of Services</h2>
					<p>
						You agree and acknowledge that Templately is entitled to modify, improve or discontinue any of its services
						at its sole discretion and without notice to you.
					</p>

					<h2>Proprietary Rights</h2>
					<p>
						You acknowledge and agree that the Site and any necessary software used in connection with the Site contain
						proprietary and confidential information that is protected by applicable intellectual property and other
						laws.
					</p>

					<h2>Termination of Agreement</h2>
					<p>
						The Terms of this agreement will continue to apply in perpetuity until terminated by either party without
						notice at any time for any reason. Terms that are to continue in perpetuity shall be unaffected by the
						termination of this agreement.
					</p>

					<h2>Disclaimer of Warranties</h2>
					<p>
						You understand and agree that your use of the Site is at your own risk and that the services are provided
						&apos;As Is&apos; and &apos;As Available&apos;.
					</p>

					<h2>Limitation of Liability</h2>
					<p>
						In no event shall Templately, nor its directors, employees, partners, agents, suppliers, or affiliates, be
						liable for any indirect, incidental, special, consequential or punitive damages, including without
						limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your access to
						or use of or inability to access or use the Site.
					</p>

					<h2>Governing Law</h2>
					<p>
						These Terms shall be governed and construed in accordance with the laws of Manchester, United Kingdom,
						without regard to its conflict of law provisions.
					</p>

					<h2>Changes</h2>
					<p>
						We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is
						material we will try to provide at least 30 days&apos; notice prior to any new terms taking effect.
					</p>

					<h2>Contact Us</h2>
					<p>If you have any questions about these Terms, please contact us at contact@templately.co.uk.</p>
				</div>
			</Container>
		</Layout>
	);
};

export default TermsAndConditions;
