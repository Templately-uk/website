import Image from 'next/image';
import Circle from '../../../public/doodles/circle.svg';

const Jumbotron: React.FC = () => {
	return (
		<div className="relative mt-32">
			<div className="flex items-center justify-center gap-1 font-serif text-5xl font-black text-center sm:text-5xl md:text-7xl">
				<div>
					Find the right <br /> email template easily
				</div>
			</div>
			<div className="mt-6 leading-7 text-center">
				<div>
					Whether it&apos;s for office use or personal tasks, tell us what you need, and we&apos;ll find it for you.
				</div>
			</div>

			<div className="absolute z-0" style={{ top: '205px', left: '40px' }}>
				<Image className="rotate-180" width={50} alt="doodle" src={Circle} />
			</div>
		</div>
	);
};
export default Jumbotron;
