import { Template } from '@/types/Template';
import copy from 'copy-to-clipboard';
import moment from 'moment';
import Image from 'next/image';
import { toast } from 'react-hot-toast';
import { BsFillChatRightFill } from 'react-icons/bs';
import SVGDoodle from '../../../public/doodles/template.svg';
import CopyTemplateBtn from './CopyTemplateBtn';

interface Props {
	data: Template;
}
const SideDialog: React.FC<Props> = ({ data }) => {
	const ready = data;
	const onCopy = () => {
		if (!data.template) return;

		// Convert HTML into plain text, maintaining line breaks
		const temporaryDiv = document.createElement('div');
		temporaryDiv.innerHTML = data.template;
		let textTemplate = '';
		for (const node of Array.from(temporaryDiv.childNodes)) {
			if (node.nodeName === 'P') {
				textTemplate += node.textContent + '\n';
			}
		}
		temporaryDiv.remove();

		// Copy template to clipboard
		copy(textTemplate, {
			format: 'text/plain',
		});
		toast.success(`Template copied to clipboard`, {
			style: {
				border: '2px solid black',
				borderRadius: '0',
			},
			position: 'top-right',
		});
	};
	return (
		<div>
			<div className="relative">
				<div className="relative z-30 shadow-[-6px_6px_0_0_#000]  p-7 border-2 border-black w-[280px] bg-white">
					<div className="flex items-center justify-center">
						<div className="p-3 bg-white border-2 border-black rounded-full shadow-[-1px_1px_0_0_#000]">
							<BsFillChatRightFill className="text-lg" />
						</div>
					</div>
					<div className="mt-1 font-serif font-black text-center">
						{ready ? (
							<>{data.title}</>
						) : (
							<div className="flex justify-center">
								<div className="w-[120px] mt-4 h-5 bg-black/10 animate-pulse"></div>
							</div>
						)}
					</div>
					<div className="flex justify-center mt-6">
						<CopyTemplateBtn onClick={onCopy} />
					</div>
					<div className="pt-2 text-base">
						<div className="mt-6">
							<div className="font-serif font-bold">Template posted</div>
							<div>
								{ready ? (
									<div>{moment(data.createdAt).format('DD MMMM, YYYY')}</div>
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
									<div className="px-2 py-1 rounded-sm bg-primary">{data.category}</div>
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
												src={
													data.user.image === 'unknown'
														? 'https://img.freepik.com/free-icon/user_318-644325.jpg?w=2000'
														: data.user.image
												}
												className="w-5 h-5 rounded-full"
												alt={'Author avatar'}
											/>
										</div>
										<div>{data.user.name}</div>
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
										{data.tags.map((_, key) => (
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
				<div className="absolute z-10" style={{ top: '140px', right: '-50px' }}>
					<Image className="" width={80} alt="doodle" src={SVGDoodle} />
				</div>
			</div>
		</div>
	);
};

export default SideDialog;
