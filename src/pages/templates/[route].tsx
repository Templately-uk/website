import Template from '@/components/Template/index';
import { getAxios } from '@/lib/axios';
import { Tag } from '@/types/Tag';
import { Tone } from '@/types/Tone';
import { transformAiTones } from '@/utils/tonesUtils';
import { GetServerSideProps } from 'next';
import { useRouter } from 'next/router';

interface Props {
	template: {
		id: number;
		route: string;
		title: string;
		useCase: string;
		template: string;
		aiTones: Tone[];
		createdAt: Date;
		updatedAt: Date;
		user: {
			name: string;
			image: string;
		};
		category: string;
		reviewed: boolean;
		tags: Tag[];
		views: number;
	};
}

function Page({ template }: Props) {
	const router = useRouter();
	const { route } = router.query;

	return <Template template={template} route={String(route)} />;
}

export const getServerSideProps: GetServerSideProps = async (context: any) => {
	const route = context.params.route;

	const axios = await getAxios();
	const template = await axios.get(`/template/${route}`);

	return {
		props: {
			template: {
				...template.data.template,
				aiTones: transformAiTones(template.data.template.aiTones),
			},
		},
	};
};

export default Page;
