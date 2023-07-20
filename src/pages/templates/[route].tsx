import { useRouter } from 'next/router';
import Template from '@/components/Template/index';
import { GetServerSideProps } from 'next';

function Page() {
	const router = useRouter();
	const { route } = router.query;

	return <Template route={String(route)} />;
}

export const getServerSideProps: GetServerSideProps = async () => {
	return {
		props: {},
	};
};

export default Page;
