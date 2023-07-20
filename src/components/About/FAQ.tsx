import { Disclosure } from '@headlessui/react';
import { FaCaretDown } from 'react-icons/fa';

interface FAQProps {
	question: string;
	answer: React.ReactNode;
}
const FAQ: React.FC<FAQProps> = ({ question, answer }) => {
	return (
		<Disclosure>
			<div className="bg-white border-2 border-black">
				<Disclosure.Button className="w-full px-2 py-3">
					<div className="flex items-center justify-between w-full">
						<div className="font-serif font-bold text-left">{question}</div>
						<div>
							<FaCaretDown />
						</div>
					</div>
				</Disclosure.Button>
				<Disclosure.Panel>
					<div className="p-4 font-sans border-t-2 border-black text-text/80">{answer}</div>
				</Disclosure.Panel>
			</div>
		</Disclosure>
	);
};

export default FAQ;
