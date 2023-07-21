import Publish from '@/components/Publish';
import { GetServerSidePropsContext } from 'next';
import { getAuth, buildClerkProps } from '@clerk/nextjs/server';

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
