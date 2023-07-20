import { FaSearch } from 'react-icons/fa';

interface Props {
	register: any;
}
const SearchInput: React.FC<Props> = ({ register }) => {
	return (
		<div className="flex items-center h-full gap-1 px-3">
			<FaSearch className="font-light text-black/90" />
			<input
				type="text"
				className="w-full min-h-full p-2 text-sm border-none appearance-none md:text-lg focus:outline-none focus:ring-0"
				placeholder="Search for a template"
				{...register('terms')}
			/>
		</div>
	);
};

export default SearchInput;
