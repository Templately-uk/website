import { Tone } from '@/types/Tone';
import moment from 'moment';
import { AiOutlineRobot } from 'react-icons/ai';
import { FiEye, FiUser } from 'react-icons/fi';

interface Props {
	title: string;
	category: string;
	useCase: string;
	user: {
		image: string;
		name: string;
	};
	votes: number;
	views: number;
	createdAt: Date;
	tags: string[];
	aiTones: Tone[];
}
const SearchTemplateCard: React.FC<Props> = ({ title, useCase, category, user, views, createdAt, tags, aiTones }) => {
	let preview = useCase.substring(0, 100) + (useCase.length > 100 ? '...' : '');
	if (!preview.endsWith('.')) preview += '.';
	return (
		<div className="relative mb-3 p-6 bg-white border-2 border-black hover:shadow-[-3px_3px_0_0_#000] transition-all ">
			<div className="flex flex-wrap items-center justify-between">
				<div className="flex flex-wrap items-center gap-2">
					<div className="font-serif text-lg font-black">{title}</div>
					<div>•</div>
					<div className="capitalize">{category}</div>
				</div>
				<div className="text-gray-600">{moment(createdAt).format('MMM YY')}</div>
			</div>
			<div className="w-1/2 overflow-auto text-gray-600">
				<div className="w-full">{preview}</div>
			</div>
			<div className="flex flex-wrap items-center gap-2 mt-3 md:gap-4">
				<div className="flex items-center gap-1">
					<FiUser />
					<div>{user.name}</div>
				</div>
				<div className="flex items-center gap-1">
					<FiEye />
					<div>{views}</div>
				</div>
			</div>
			{aiTones && aiTones.length > 0 && (
				<div className="flex flex-wrap items-center gap-1 mt-1 font-serif">
					<AiOutlineRobot />
					<div className="lowercase">{aiTones.map((aiTone) => aiTone.name).join(', ')}</div>
				</div>
			)}
			<div className="flex flex-wrap items-center gap-2 mt-4">
				{tags.map((tag, index) => (
					<div className="px-2 py-1 bg-primary" key={index}>
						{tag}
					</div>
				))}
			</div>
		</div>
	);
};

export default SearchTemplateCard;
