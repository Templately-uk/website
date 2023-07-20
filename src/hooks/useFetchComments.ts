import { getAuthAxios, getAxios } from '@/lib/axios';
import { useQuery } from 'react-query';

export interface Response {
	comments: CommentResponse[];
}

interface CommentResponse {
	id: number;
	content: string;
	createdAt: string;
	user: {
		name: string;
		image: string;
	};
	owner: boolean;
}

export const useFetchComments = (templateRoute: string, auth = false) => {
	const options = {};
	const { isLoading, isError, data } = useQuery(
		['comments', templateRoute],
		() => fetchComments(templateRoute, auth),
		options,
	);

	return { isLoading, isError, data };
};

const fetchComments = async (templateRoute: string, auth = false): Promise<Response> => {
	// If authenticated then use the proxy route
	let axios = await getAxios();
	if (auth) axios = await getAuthAxios();

	const fetch = await axios.get(`/comments/${templateRoute}`);
	return {
		comments: fetch.data.comments,
	};
};
