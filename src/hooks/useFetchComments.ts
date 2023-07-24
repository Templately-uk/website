import { getAPIAxios, getAxios } from '@/lib/axios';
import { Comment } from '@/types/Comment';
import { useQuery } from 'react-query';

export interface Response {
	comments: CommentResponse[];
}

interface CommentResponse {
	comment: Comment;
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

const fetchComments = async (templateRoute: string, auth = false) => {
	// If authenticated then use the proxy route
	let axios = await getAxios();
	if (auth) axios = await getAPIAxios();

	const fetch = await axios.get(`/comments/${templateRoute}`);

	return fetch.data.comments;
};
