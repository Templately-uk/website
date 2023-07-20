import { getAuthAxios } from '@/lib/axios';
import { toast } from 'react-hot-toast';

export const useDeleteTemplate = () => {
	const onSubmit = async (templateId: number) => {
		try {
			const axios = await getAuthAxios();
			const result = await axios.delete(`/user/template/${templateId}`);
			if (result.status === 200) {
				toast.success(`Template removed`, {
					style: {
						border: '2px solid black',
						borderRadius: '0',
					},
					position: 'bottom-center',
				});
			} else {
				toast.error('An unexpected error has occurred', {
					style: {
						border: '2px solid black',
						borderRadius: '0',
					},
				});
			}
		} catch (err) {
			toast.error(`An unexpected error has occurred: ${err}`, {
				style: {
					border: '2px solid black',
					borderRadius: '0',
				},
				position: 'bottom-center',
			});
		}
	};

	return { onSubmit };
};
