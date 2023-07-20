import Search from '@/components/Search';

const SearchEmptyPage = () => {
	return <Search initialSearch={''} />;
};

export async function getServerSideProps() {
	return {
		props: {},
	};
}

export default SearchEmptyPage;
