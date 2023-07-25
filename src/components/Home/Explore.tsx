import { useFetchMetrics } from '@/hooks/useFetchMetrics';
import { Categories } from '@/types/Category';
import Image from 'next/image';
import Link from 'next/link';
import CountUp from 'react-countup';
import { FaFacebookMessenger } from 'react-icons/fa6';
import Dots from '../../../public/doodles/dots.svg';
import { Button } from '../ui/Button';

const Explore: React.FC = () => {
	// Fetch the categories and counts templates submitted for categories
	const { data: metrics } = useFetchMetrics();
	return (
		<div className="mt-32">
			<div className="grid grid-cols-12">
				<div className="col-span-8">
					<div className="flex flex-wrap gap-2 mb-2 text-3xl font-black md:text-5xl">
						<div>Explore from</div>
						<div>
							{metrics && <CountUp start={0} end={metrics.templates ? metrics.templates : 0} duration={2.75} />}
						</div>
						<div>templates</div>
					</div>
				</div>
				<div className="flex items-end justify-end col-span-4">
					<Link href="/search">
						<Button>View all templates</Button>
					</Link>
				</div>
			</div>
			<div className="mt-6">
				<div className="relative">
					<div className="relative z-30 grid w-full grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-6">
						{metrics.categories ? (
							<>
								{Object.keys(Categories).map((category, index) => (
									<ExploreCard
										desc={Categories[category]}
										count={metrics.categories ? metrics.categories[category] : 0}
										name={category}
										key={index}
									/>
								))}
							</>
						) : (
							<>
								<div className="w-full h-44 bg-black/10 animate-pulse"></div>
								<div className="w-full h-44 bg-black/10 animate-pulse"></div>
								<div className="w-full h-44 bg-black/10 animate-pulse"></div>
								<div className="w-full h-44 bg-black/10 animate-pulse"></div>
								<div className="w-full h-44 bg-black/10 animate-pulse"></div>
								<div className="w-full h-44 bg-black/10 animate-pulse"></div>
							</>
						)}
					</div>
					<div>
						<div className="absolute z-0" style={{ top: '705px', right: '-50px' }}>
							<Image className="" width={120} alt="doodle" src={Dots} />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export const iconMap = {
	professional: <Image src={'./icons/professional.svg'} width={30} height={30} alt={'Professional icon'} />,
	educational: <Image src={'./icons/education.svg'} width={30} height={30} alt={'Educational icon'} />,
	personal: <Image src={'./icons/personal.svg'} width={30} height={30} alt={'Personal icon'} />,
	'sales and marketing': (
		<Image src={'./icons/salesandmarketing.svg'} width={30} height={30} alt={'Sales and marketing icon'} />
	),
	'career development': <Image src={'./icons/career.svg'} width={30} height={30} alt={'Career development icon'} />,
	productivity: <Image src={'./icons/productivity.svg'} width={30} height={30} alt={'Productivity icon'} />,
	'event planning': <Image src={'./icons/eventplanning.svg'} width={30} height={30} alt={'Event planning icon'} />,
	'customer service': <Image src={'./icons/customer.svg'} width={30} height={30} alt={'Customer service icon'} />,
	miscellaneous: <Image src={'./icons/misc.svg'} width={30} height={30} alt={'Miscellaneous icon'} />,
};
const ExploreCard = ({ count, name, desc }: { count: number; name: string; desc: string }) => {
	const IconComponent = iconMap[`${name}`]; // Get the icon based on the category name
	return (
		<Link href={`/search/?category=${name}`}>
			<div className="p-5 bg-white border-2 border-black hover:shadow-[-3px_3px_0_0_#000] transition-all">
				<div className="inline-block">
					{IconComponent ? IconComponent : <FaFacebookMessenger />}{' '}
					{/* If the name matches any in our map, use the corresponding icon. If not, default to the Messenger icon */}
				</div>
				<div className="mt-2 font-serif text-lg font-black">
					{count} {name} templates
				</div>
				<div className="mt-2 overflow-hidden h-[110px]">{desc}</div>
			</div>
		</Link>
	);
};
export default Explore;
