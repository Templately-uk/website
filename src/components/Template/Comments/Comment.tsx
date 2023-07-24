import { useRemoveComment } from '@/hooks/useRemoveComment';
import moment from 'moment';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { FaTrash } from 'react-icons/fa6';

interface Props {
	id: number;
	content: string;
	user: {
		name: string;
		image: string;
	};
	createdAt: Date;
	owner: boolean;
}
const Comment: React.FC<Props> = ({ id, user, createdAt, content, owner }) => {
	const router = useRouter();
	const { onSubmit } = useRemoveComment();
	const onDelete = () => {
		onSubmit(id);
		setTimeout(() => router.reload(), 1000);
	};
	return (
		<div className="p-5 mb-3 bg-white border-2 border-black">
			<div className="flex items-center justify-between">
				<div>
					<div className="flex items-center gap-3">
						<div className="flex items-center gap-2">
							<div>
								<Image
									width={20}
									height={20}
									src={
										!user || user.image === undefined || user.image === 'unknown'
											? 'https://img.freepik.com/free-icon/user_318-644325.jpg?w=2000'
											: user.image
									}
									className="w-5 h-5 rounded-full"
									alt={'Author avatar'}
								/>
							</div>
							<div>{user ? user.name : 'unknown'}</div>
						</div>
						<div className="text-black/60">{moment(createdAt).format('DD MMMM, YYYY')}</div>
					</div>
					<div className="mt-2 text-black">{content}</div>
				</div>
				<div>
					{owner && (
						<button onClick={onDelete} className="transition-all hover:animate-spin hover:text-red-700">
							<FaTrash />
						</button>
					)}
				</div>
			</div>
		</div>
	);
};
export default Comment;
