import { BsFillChatRightFill } from 'react-icons/bs';
import CopyTemplateBtn from './CopyTemplateBtn';
import moment from 'moment';
import { Response as useFetchTemplate } from '@/hooks/useFetchTemplate';
import Image from 'next/image';

interface Props {
	data?: useFetchTemplate;
}
const SideDialog: React.FC<Props> = ({ data }) => {
	const ready = data;
	return (
		<div>
			<div className="shadow-[-6px_6px_0_0_#000] relative p-7 border-2 border-black w-[280px] bg-white">
				<div className="flex items-center justify-center">
					<div className="p-3 bg-white border-2 border-black rounded-full shadow-[-1px_1px_0_0_#000]">
						<BsFillChatRightFill className="text-lg" />
					</div>
				</div>
				<div className="mt-1 font-serif font-black text-center">
					{ready ? (
						<>{data.template.title}</>
					) : (
						<div className="flex justify-center">
							<div className="w-[120px] mt-4 h-5 bg-black/10 animate-pulse"></div>
						</div>
					)}
				</div>
				<div className="flex justify-center mt-6">
					<CopyTemplateBtn />
				</div>
				<div className="pt-2 text-base">
					<div className="mt-6">
						<div className="font-serif font-bold">Template posted</div>
						<div>
							{ready ? (
								<div>{moment(data.template.createdAt).format('DD MMMM, YYYY')}</div>
							) : (
								<div className="w-[80px] h-6 bg-black/10 animate-pulse"></div>
							)}
						</div>
					</div>
					<div className="mt-8">
						<div className="font-serif font-bold">Template type</div>
						<div className="flex mt-1">
							{/* Label */}
							{ready ? (
								<div className="px-2 py-1 rounded-sm bg-primary">{data.template.category.name}</div>
							) : (
								<div className="w-[80px] h-6 bg-black/10 animate-pulse"></div>
							)}
						</div>
					</div>
					<div className="mt-8">
						<div className="font-serif font-bold">Author</div>
						<div className="flex items-center gap-1 mt-1">
							{ready ? (
								<>
									<div className="">
										<Image
											width={20}
											height={20}
											src={data.template.user.image}
											className="w-5 h-5 rounded-full"
											alt={'Author avatar'}
										/>
									</div>
									<div>{data.template.user.name}</div>
								</>
							) : (
								<>
									<div className="w-5 h-5 rounded-full bg-black/10 animate-pulse"></div>
									<div className="w-[50px] h-5 bg-black/10 animate-pulse"></div>
								</>
							)}
						</div>
					</div>
					<div className="mt-8">
						<div className="font-serif font-bold">Tags</div>
						<div className="flex flex-wrap mt-1 gap-x-1 gap-y-1">
							{ready ? (
								<>
									{data.template.tags.map((_, key) => (
										<div className="px-2 py-1 rounded-sm bg-primary" key={key}>
											{_.name}
										</div>
									))}
								</>
							) : (
								<>
									<div className="w-[50px] h-6 bg-black/10 animate-pulse"></div>
									<div className="w-[50px] h-6 bg-black/10 animate-pulse"></div>
								</>
							)}
						</div>
					</div>
				</div>
			</div>
			<div></div>
		</div>
	);
};

export default SideDialog;
