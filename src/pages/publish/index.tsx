import Publish from '@/components/Publish';
import { getSession } from 'next-auth/react';
import { GetServerSidePropsContext } from 'next';

/**
 * Only allowed auth'd sessions onto Editor
 */
export async function getServerSideProps(context: GetServerSidePropsContext) {
	const session = await getSession(context);
	if (!session) {
		return {
			redirect: {
				destination: '/',
				permanent: false,
			},
		};
	}
	return {
		props: { session },
	};
}

export default Publish;
