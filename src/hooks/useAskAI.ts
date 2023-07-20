import { getAuthAxios } from '@/lib/axios';
import { toast } from 'react-hot-toast';

export const useAskAI = () => {
	const onSubmit = async (description: string): Promise<{ body: string; useCase: string }> => {
		try {
			const axios = await getAuthAxios();
			const result = await axios.post(
				'/ai/write',
				{
					description: description,
				},
				{
					timeout: 50000,
				},
			);
			if (result.status === 200) {
				const body = result.data.result.body;
				const useCase = result.data.result.useCase;
				return { body, useCase };
			} else {
				toast.error('An unexpected error has occurred', {
					style: {
						border: '2px solid black',
						borderRadius: '0',
					},
				});
				return { body: '', useCase: '' };
			}
		} catch (err) {
			toast.error(`An unexpected error has occurred: ${err}`, {
				style: {
					border: '2px solid black',
					borderRadius: '0',
				},
				position: 'bottom-center',
			});
			return { body: '', useCase: '' };
		}
	};

	return { onSubmit };
};
