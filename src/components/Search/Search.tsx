import { useState } from 'react';
import SearchBtn from './SearchBtn';
import SearchInput from './SearchInput';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useRouter } from 'next/router';

interface Props {
	initialSearch?: string;
}
interface Inputs {
	terms: string;
}
const Search: React.FC<Props> = ({ initialSearch }) => {
	const router = useRouter();

	const { register, handleSubmit } = useForm<Inputs>({
		defaultValues: {
			terms: initialSearch || '',
		},
	});

	const onSearch: SubmitHandler<Inputs> = (data) => {
		setLoading(true);
		router.push(`/search/${data.terms}`);
	};

	const [loading, setLoading] = useState(false);

	return (
		<form onSubmit={handleSubmit(onSearch)} className="flex items-center mt-6">
			<div className="w-full h-16 bg-white border-2 border-black">
				<div className="flex items-center w-full h-full">
					<div className="w-full h-full">
						<SearchInput register={register} />
					</div>
				</div>
			</div>
			<SearchBtn loading={loading} />
		</form>
	);
};

export default Search;
