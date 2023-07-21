import { getAPIAxios } from '@/lib/axios';
import { useQuery } from 'react-query';

interface TemplateResponse {
	id: number;
	route: string;
	title: string;
	category: {
		name: string;
		id: number;
	};
	user: {
		name: string;
		image: string;
	};
	tags: {
		name: string;
	}[];
	aiTones: string;
	views: number;
	votes: number;
	createdAt: Date;
	updatedAt: Date;
	summary: string;
}
export interface Response {
	templates: TemplateResponse[];
}

export const useFetchUserProfile = () => {
	const options = {};
	const { isLoading, isError, data } = useQuery(['userProfile'], () => fetchUserProfile(), options);

	return { isLoading, isError, data };
};

const fetchUserProfile = async (): Promise<Response> => {
	const axios = await getAPIAxios();
	const fetch = await axios.get(`/user`);

	return {
		templates: fetch.data.templates,
	};
};
