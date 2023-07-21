import { getAPIAxios } from '@/lib/axios';
import { toast } from 'react-hot-toast';

interface TemplateData {
	template: string;
	title: string;
	usecase: string;
	category: string;
	tags: { id: string; text: string }[];
}

export const usePostTemplate = () => {
	const onSubmit = async (data: TemplateData): Promise<string | null> => {
		try {
			// Prepare body
			const { title, category, tags, usecase, template } = data;
			const body = {
				title,
				category: category.toLowerCase().trim(),
				tags: tags.map((tag) => tag.id.toLowerCase().replace(' ', '_')),
				usecase,
				template,
			};

			// Send POST request
			const axios = await getAPIAxios();
			const result = await axios.post('/publish', JSON.stringify(body));

			if (result.status === 200) {
				const route = result.data.route;
				if (!route) {
					toast.error('An unexpected error has occurred', {
						style: {
							border: '2px solid black',
							borderRadius: '0',
						},
						position: 'bottom-center',
					});
				} else {
					toast.success(`Template ${title} uploaded successfully!`, {
						style: {
							border: '2px solid black',
							borderRadius: '0',
						},
						position: 'bottom-center',
					});
					return route;
				}
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
		} catch (err) {
			toast.error(`An unexpected error has occurred: ${err}`, {
				style: {
					border: '2px solid black',
					borderRadius: '0',
				},
				position: 'bottom-center',
			});
		}
		return null;
	};

	return { onSubmit };
};
