import Search from '../Search/Search';

const SearchComponent: React.FC = () => {
	return (
		<div className="mt-20">
			<div className="max-w-4xl mx-auto">
				<Search frontPage={true} />
			</div>
		</div>
	);
};

export default SearchComponent;
