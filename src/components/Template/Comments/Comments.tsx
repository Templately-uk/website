import { useFetchComments } from '@/hooks/useFetchComments';
import PostComment from './PostComment';
import Comment from './Comment';
import { useSession } from 'next-auth/react';

interface Props {
	route: string;
}
const Comments: React.FC<Props> = ({ route }) => {
	const session = useSession();
	const { data } = useFetchComments(route, session !== null);
	return (
		<div>
			<div className="mt-4">
				{data ? (
					<div>
						{data.comments.map((comment, key) => (
							<Comment
								id={comment.id}
								key={key}
								content={comment.content}
								user={comment.user}
								createdAt={comment.createdAt}
								owner={comment.owner}
							/>
						))}
					</div>
				) : (
					<div>
						<div className="w-full mt-4 h-36 bg-black/10 animate-pulse"></div>
					</div>
				)}
			</div>
			<div className="mt-6">
				<PostComment route={route} />
			</div>
		</div>
	);
};

export default Comments;
