import axios, { AxiosInstance } from 'axios';

let axiosInst: AxiosInstance | null = null;
let axiosAuthInst: AxiosInstance | null = null;

export const getAxios = async (): Promise<AxiosInstance> => {
	if (!axiosInst) {
		axiosInst = axios.create({
			baseURL: process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000',
			timeout: 10000,
			headers: { 'Content-Type': 'application/json' },
		});
	}
	return axiosInst;
};

export const getAuthAxios = async (): Promise<AxiosInstance> => {
	if (!axiosAuthInst) {
		axiosAuthInst = axios.create({
			baseURL: '/api/proxy/',
			timeout: 10000,
			headers: { 'Content-Type': 'application/json' },
		});
	}
	return axiosAuthInst;
};
