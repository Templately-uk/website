import { getAuthAxios } from '@/lib/axios';
import { toast } from 'react-hot-toast';

export const useRemoveComment = () => {
	const onSubmit = async (commentId: number) => {
		try {
			const axios = await getAuthAxios();
			const result = await axios.delete(`/comment/${commentId}`);
			if (result.status === 200) {
				toast.success(`Comment removed`, {
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
