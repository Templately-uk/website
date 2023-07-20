import Container from '../ui/layouts/Container';
import Layout from '../ui/layouts/Layout';
import Explore from './Explore';
import Jumbotron from './Jumbotron';
import Search from './Search';

const Home = () => {
	return (
		<Layout
			title={'Templately.co.uk'}
			description={
				'AI-powered Email Template Library & Generation Engine. Boost efficiency with our searchable, community-driven templates'
			}
		>
			<Container>
				<Jumbotron />
				<Search />
				<Explore />
			</Container>
		</Layout>
	);
};

export default Home;
