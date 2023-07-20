import { getAxios } from '@/lib/axios';
import { useQuery } from 'react-query';

export interface Response {
	tags: TagResponse[];
}

interface TagResponse {
	id: number;
	name: string;
	createdAt: Date;
	count: number;
}

export const useFetchTags = () => {
	const options = {};
	const { isLoading, isError, data } = useQuery(['tags'], () => fetchTags(), options);

	return { isLoading, isError, data };
};

const fetchTags = async (): Promise<Response> => {
	const axios = await getAxios();
	const fetch = await axios.get(`/tags`);

	return {
		tags: fetch.data.tags,
	};
};
