import { getAxios } from '@/lib/axios';
import { Template } from '@/types/Template';
import { transformAiTones } from '@/utils/tonesUtils';
import { useQuery } from 'react-query';

export const useFetchTemplate = (templateRoute: string) => {
	const options = {};
	const { isLoading, isError, data } = useQuery(
		['template', templateRoute],
		() => fetchTemplate(templateRoute),
		options,
	);

	return { isLoading, isError, data };
};

const fetchTemplate = async (templateRoute: string): Promise<Template> => {
	const axios = await getAxios();
	const fetch = await axios.get(`/template/${templateRoute}`);

	// Transform ai tones
	if (fetch.data.template) fetch.data.template.aiTones = transformAiTones(fetch.data.template.aiTones);

	return fetch.data.template;
};
