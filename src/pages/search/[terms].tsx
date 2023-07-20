import { useRouter } from 'next/router';
import Search from '@/components/Search';

const SearchPage = () => {
	const router = useRouter();
	const { terms } = router.query;
	return <Search initialSearch={String(terms)} />;
};

export async function getServerSideProps() {
	return {
		props: {},
	};
}

export default SearchPage;
