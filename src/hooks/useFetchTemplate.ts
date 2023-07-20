import { getAxios } from '@/lib/axios';
import { Tone } from '@/types/Tone';
import { transformAiTones } from '@/utils/tonesUtils';
import { useQuery } from 'react-query';

export interface Response {
	template: {
		id: number;
		route: string;
		title: string;
		summary: string;
		body: string;
		aiTones: Tone[];
		createdAt: string;
		updatedAt: string;
		user: {
			name: string;
			image: string;
		};
		category: {
			id: number;
			name: string;
		};
		tags: Array<{
			id: number;
			name: string;
		}>;
		comments: Array<{
			id: number;
			templateId: number;
			content: string;
			user: {
				name: string;
				image: string;
			};
			createdAt: string;
		}>;
		reviewed: boolean;
		reactions: Record<string, number>;
	};
}

export const useFetchTemplate = (templateRoute: string) => {
	const options = {};
	const { isLoading, isError, data } = useQuery(
		['template', templateRoute],
		() => fetchTemplate(templateRoute),
		options,
	);

	return { isLoading, isError, data };
};

const fetchTemplate = async (templateRoute: string): Promise<Response> => {
	const axios = await getAxios();
	const fetch = await axios.get(`/template/${templateRoute}`);

	// Transform ai tones
	if (fetch.data.template) {
		fetch.data.template.aiTones = transformAiTones(fetch.data.template.aiTones);
	}
	return {
		template: fetch.data.template,
	};
};
