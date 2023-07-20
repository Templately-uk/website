import { getAuthAxios } from '@/lib/axios';
import { useState } from 'react';
import { toast } from 'react-hot-toast';

interface CommentData {
	route: string;
	content: string;
}

interface FormError {
	field: string;
	message: string;
}

export const usePostComment = () => {
	const [errors, setErrors] = useState<FormError[]>([]);

	const validate = ({ content }: CommentData): boolean => {
		let isValid = true;
		const errors: FormError[] = [];

		if (content.length <= 16) {
			errors.push({ field: 'title', message: 'Comment required to be longer than 16 characters' });
			isValid = false;
		}

		setErrors(errors);

		return isValid;
	};

	const onSubmit = async (data: CommentData): Promise<boolean> => {
		try {
			// Validate form data
			if (!validate(data)) {
				toast.error('Please ensure all required fields are correctly filled out', {
					style: {
						border: '2px solid black',
						borderRadius: '0',
					},
				});
				return false;
			}

			// Prepare body
			const { route, content } = data;
			const body = {
				route,
				content,
			};

			// Send POST request
			const axios = await getAuthAxios();
			const result = await axios.post('/comment', JSON.stringify(body));

			if (result.status === 200) {
				toast.success(`Comment added to Template!`, {
					style: {
						border: '2px solid black',
						borderRadius: '0',
					},
					position: 'bottom-center',
				});
				return true;
			} else if (result.data.errors.length > 0) {
				// Alert error from axios
				toast.error(result.data.errors[0], {
					style: {
						border: '2px solid black',
						borderRadius: '0',
					},
				});
			} else {
				// Alert random unexpected error
				toast.error('An unexpected error has occurred', {
					style: {
						border: '2px solid black',
						borderRadius: '0',
					},
				});
			}
			return false;
		} catch (err) {
			toast.error(`An unexpected error has occurred: ${err}`, {
				style: {
					border: '2px solid black',
					borderRadius: '0',
				},
				position: 'bottom-center',
			});
			return false;
		}
	};

	return { onSubmit, errors };
};
