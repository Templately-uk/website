import GoBackButton from '../ui/GoBackButton';
import PageTitle from '../ui/PageTitle';
import SectionTitle from '../ui/SectionTitle';
import Container from '../ui/layouts/Container';
import Layout from '../ui/layouts/Layout';
import FAQ from './FAQ';
import { questions } from './FAQS';

const About = () => {
	return (
		<Layout title={'About'}>
			<Container>
				<section className="mt-12">
					<GoBackButton />
					<PageTitle title="About" />
					<div className="mt-4">
						Templately.co.uk is a simple, efficient email template engine designed to support your communication needs.
						We house a rich library of templates, each searchable and designed for a range of email purposes.
						Contributed by our dedicated user community, these templates form the heart of our service. Our service is
						kept free to use through the use of subtle, unobtrusive ads. We strive to maintain an ad experience that
						respects your work process and doesn't disrupt your focus.
					</div>
				</section>
				<section className="mt-12">
					{questions.map((question, key) => (
						<div key={key} className="mb-4">
							<FAQ question={question.question} answer={question.answer} />
						</div>
					))}
				</section>
				<section className="mt-12">
					<SectionTitle title={'Contact'} />
					<div className="mt-4">
						If you wish to contact us, please do, using the social links in the top right, or contact James directly by
						email using hello@james.buzz. We accept any sort of feedback including bug reports, feature suggestions,
						questions about usage, etc.
					</div>
				</section>
			</Container>
		</Layout>
	);
};

export default About;
