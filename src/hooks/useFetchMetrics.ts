import { getAxios } from '@/lib/axios';
import { useMemo } from 'react';
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
	const { isLoading, isError, data: fetchedData } = useQuery(['metrics'], () => fetchMetrics(), options);

	const data = useMemo(() => {
		// Convert the categories array into an object
		const categories = fetchedData?.categories.reduce((acc, curr) => {
			acc[curr.category] = curr.count;
			return acc;
		}, {});
		return { ...fetchedData, categories };
	}, [fetchedData]);

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
