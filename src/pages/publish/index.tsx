import Publish from '@/components/User/Publish';
import { buildClerkProps, getAuth } from '@clerk/nextjs/server';
import { GetServerSidePropsContext } from 'next';

/**
 * Only allowed auth'd sessions onto Editor
 */
export async function getServerSideProps(context: GetServerSidePropsContext) {
	const { userId } = getAuth(context.req);
	if (!userId) {
		return {
			redirect: {
				destination: '/',
				permanent: false,
			},
		};
	}
	return {
		props: { ...buildClerkProps(context.req) },
	};
}

export default Publish;
