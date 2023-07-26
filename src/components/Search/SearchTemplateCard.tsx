import { Template } from '@/types/Template';
import { Tone } from '@/types/Tone';
import { transformAiTones } from '@/utils/tonesUtils';
import moment from 'moment';
import { AiOutlineRobot } from 'react-icons/ai';
import { FiEye, FiUser } from 'react-icons/fi';

interface Props {
	template: Template;
}
const SearchTemplateCard: React.FC<Props> = ({ template }) => {
	let preview = template.useCase.substring(0, 100) + (template.useCase.length > 100 ? '...' : '');
	if (!preview.endsWith('.')) preview += '.';
	return (
		<div className="relative mb-3 p-6 bg-white border-2 border-black hover:shadow-[-3px_3px_0_0_#000] transition-all ">
			<div className="flex flex-wrap items-center justify-between">
				<div className="flex flex-wrap items-center gap-2">
					<div className="font-serif text-lg font-black">{template.title}</div>
					<div>•</div>
					<div className="capitalize">{template.category}</div>
				</div>
				<div className="text-gray-600">{moment(template.createdAt).format('DD MMM YY')}</div>
			</div>
			<div className="w-full overflow-auto text-gray-600 sm:w-2/3">
				<div className="w-full">{preview}</div>
			</div>
			<div className="flex flex-wrap items-center gap-2 mt-3 md:gap-4">
				<div className="flex items-center gap-1">
					<FiUser />
					<div>{template.user.name}</div>
				</div>
				<div className="flex items-center gap-1">
					<FiEye />
					<div>{template.views}</div>
				</div>
			</div>
			{template.aiTones && template.aiTones.length > 0 && (
				<div className="flex flex-wrap items-center gap-1 mt-1 font-serif">
					<AiOutlineRobot />
					<div className="lowercase">
						{transformAiTones(String(template.aiTones))
							.map((aiTone: Tone) => aiTone.name)
							.join(', ')}
					</div>
				</div>
			)}
			<div className="flex flex-wrap items-center gap-2 mt-4">
				{template.tags.map((tag, index) => (
					<div className="px-2 py-1 bg-primary" key={index}>
						{tag.name}
					</div>
				))}
			</div>
		</div>
	);
};

export default SearchTemplateCard;
