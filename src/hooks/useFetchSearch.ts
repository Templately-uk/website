import { getAxios } from '@/lib/axios';
import { Template } from '@/types/Template';
import { useQuery } from 'react-query';

interface Response {
	hits: Template[];
	totalHits: number;
	totalPages: number;
	currentPage: number;
	timeTaken: number;
}

const fetchSearchTemplates = async (
	terms: string,
	limit: number,
	offset: number,
	categories: string,
	tags: string,
	sort: string,
	order: string,
): Promise<Response> => {
	console.log(categories);
	const axios = await getAxios();
	const fetch = await axios.get(`/search/${terms}`, {
		params: {
			limit,
			offset,
			categories,
			tags,
			sort,
			order,
		},
	});

	return {
		hits: fetch.data.results.hits,
		totalHits: fetch.data.results.totalHits,
		totalPages: fetch.data.results.totalPages,
		currentPage: fetch.data.results.currentPage,
		timeTaken: fetch.data.timeTaken,
	};
};

export const useSearchTemplates = (
	terms: string,
	limit: number,
	offset: number,
	categories: string[],
	tags: string,
	sort: string,
	order: string,
) => {
	const options = {};
	const { isLoading, isError, data } = useQuery(
		['searchTemplates', terms, limit, offset, categories, tags, sort, order],
		() => fetchSearchTemplates(terms, limit, offset, categories.join(','), tags, sort, order),
		options,
	);

	return { data, isLoading, isError };
};
