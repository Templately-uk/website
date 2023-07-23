import { getAPIAxios } from '@/lib/axios';
import { Template } from '@/types/Template';
import { useQuery } from 'react-query';

export interface Response {
	templates: Template[];
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
