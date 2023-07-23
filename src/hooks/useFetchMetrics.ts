import { getAxios } from '@/lib/axios';
import { useQuery } from 'react-query';

export interface Response {
	templates: number;
	categories: CategoryResponse[];
}

interface CategoryResponse {
	category: string;
	count: number;
}

export const useFetchMetrics = () => {
	const options = {};
	const { isLoading, isError, data } = useQuery(['metrics'], () => fetchMetrics(), options);

	return { isLoading, isError, data };
};

const fetchMetrics = async (): Promise<Response> => {
	const axios = await getAxios();
	const fetch = await axios.get(`/metrics`);

	return {
		templates: fetch.data.templates,
		categories: fetch.data.categories,
	};
};
