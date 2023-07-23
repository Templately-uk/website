import { FaMagic } from 'react-icons/fa';
import { FaTable } from 'react-icons/fa6';
import FieldError from '../ui/FieldError';
import CategorySelect from './CategorySelect';
import Tags from './Tags';

interface Props {
	register: any;
	errors: any;
	control: any;
}
const Sidebar: React.FC<Props> = ({ register, errors, control }) => {
	return (
		<nav>
			{/* Sidebar */}
			<div className="shadow-[-6px_6px_0_0_#000] relative p-7 border-2 border-black w-[280px] bg-white">
				<div className="flex items-center justify-center">
					<div className="p-3 bg-white border-2 border-black rounded-full shadow-[-1px_1px_0_0_#000]">
						<FaTable className="text-lg" />
					</div>
				</div>
				<div className="mt-1 font-serif font-black text-center">Template</div>
				<div className="pt-2 text-sm">
					<div className="mt-6">
						<div className="font-serif font-bold">Category *</div>
						<div className="mt-1">
							<CategorySelect register={register} errors={errors} control={control} name={'category'} />
							{errors?.category?.type === 'required' && <FieldError error={'Category is required'} />}
						</div>
					</div>
					<div className="mt-6">
						<div className="font-serif font-bold">Tags</div>
						<div className="overflow-hidden">
							<Tags control={control} name={'tags'} />
						</div>
					</div>
				</div>
			</div>
			<div className="mt-8 text-center">
				<button className="px-4 py-2 border-4 border-black rounded">
					<div className="flex items-center gap-2 font-serif text-base font-black">
						<FaMagic className={'animate-pulse'} />
						<div>Generate with AI</div>
					</div>
				</button>
			</div>
		</nav>
	);
};

export default Sidebar;
