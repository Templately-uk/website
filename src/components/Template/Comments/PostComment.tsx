import { usePostComment } from '@/hooks/usePostComment';
import { useRouter } from 'next/router';
import { useState } from 'react';

interface Props {
	route: string;
}
const PostComment: React.FC<Props> = ({ route }) => {
	const router = useRouter();

	const [comment, setComment] = useState('');

	const { onSubmit } = usePostComment();

	const onFormSubmit = async (evt: any) => {
		evt.preventDefault();
		const result = await onSubmit({
			route,
			comment,
		});
		if (result)
			setTimeout(() => {
				router.reload();
			}, 1000);
	};
	return (
		<form onSubmit={onFormSubmit}>
			{/** UPDATE TO FIX COMMENTS */}
			<textarea
				className="p-4 bg-transparent border-2 border-black w-full h-[200px]"
				placeholder="Write a comment"
				onChange={(evt) => setComment(evt.target.value)}
				value={comment}
			></textarea>
			<button type={'submit'} className="px-2 py-1 font-serif font-semibold border-2 border-black">
				Post comment
			</button>
		</form>
	);
};

export default PostComment;
