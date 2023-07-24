import { useFetchComments } from '@/hooks/useFetchComments';
import { useAuth } from '@clerk/nextjs';
import Comment from './Comment';
import PostComment from './PostComment';

interface Props {
	route: string;
}
const Comments: React.FC<Props> = ({ route }) => {
	const { sessionId } = useAuth();
	const { data } = useFetchComments(route, sessionId !== null);
	return (
		<div>
			<div className="mt-4">
				{data ? (
					<div>
						{data?.map((_, key) => (
							<Comment id={_.id} key={key} content={_.comment} user={_.user} createdAt={_.createdAt} owner={_.owner} />
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
