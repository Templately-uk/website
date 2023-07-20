import { Response as useFetchTemplate } from '@/hooks/useFetchTemplate';

const emojis = ['😀', '😂', '😢', '😡', '😮', '❤️'];

interface Props {
	data?: useFetchTemplate;
}

const EmojiReactions: React.FC<Props> = ({ data }) => {
	const handleReactionClick = (emoji: string) => {
		// Handle the click logic here
		console.log(`Clicked reaction: ${emoji}`);
		// You can perform any necessary API calls or state updates based on the selected reaction
	};

	return (
		<div>
			<div className="grid grid-cols-3 gap-4 text-center">
				{emojis.map((emoji) => (
					<button
						key={emoji}
						onClick={() => handleReactionClick(emoji)}
						className="flex items-center justify-center w-8 h-8 bg-gray-200 rounded-full hover:bg-gray-300"
					>
						<span>{emoji}</span>
						<span className="ml-1 text-xl text-gray-600 grayscale">({data?.template.reactions?.[emoji] || 0})</span>
					</button>
				))}
			</div>
		</div>
	);
};

export default EmojiReactions;
