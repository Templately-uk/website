import { useFetchMetrics } from '@/hooks/useFetchMetrics';
import { Categories } from '@/types/Category';
import Link from 'next/link';
import CountUp from 'react-countup';
import { FaBriefcase, FaBullhorn, FaGraduationCap, FaLightbulb, FaUserCircle, FaUserTie } from 'react-icons/fa';
import { FaFacebookMessenger } from 'react-icons/fa6';
import { Button } from '../ui/Button';

const Explore: React.FC = () => {
	// Fetch the categories and counts templates submitted for categories
	const { data: metrics } = useFetchMetrics();
	return (
		<div className="mt-32">
			<div className="flex flex-wrap items-center justify-between">
				<div>
					<div className="w-full text-3xl md:text-5xl font-black md:w-[600px] flex flex-wrap gap-2 mb-2">
						<div>Explore from</div>
						<div>{metrics && <CountUp start={0} end={metrics.templates} duration={2.75} />}</div>
						<div>templates</div>
					</div>
				</div>
				<Link href="/search">
					<Button>View all templates</Button>
				</Link>
			</div>
			<div className="mt-6">
				<div className="grid w-full grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-6">
					{metrics ? (
						<>
							{metrics.categories.map((category, index) => (
								<ExploreCard
									desc={Categories[category.category]}
									count={category.count}
									name={category.category}
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
			</div>
		</div>
	);
};

const iconMap = {
	professional: <FaBriefcase />,
	personal: <FaUserCircle />,
	'sales and marketing': <FaBullhorn />,
	career: <FaGraduationCap />,
	productivity: <FaLightbulb />,
	recruitment: <FaUserTie />,
};
const ExploreCard = ({ count, name, desc }: { count: number; name: string; desc: string }) => {
	const IconComponent = iconMap[`${name}`]; // Get the icon based on the category name
	return (
		<Link href={`/search/?category=${name}`}>
			<div className="p-5 bg-white border-2 border-black hover:shadow-[-3px_3px_0_0_#000] transition-all">
				<div className="inline-block p-2 rounded-full bg-gray-50">
					{IconComponent ? IconComponent : <FaFacebookMessenger />}{' '}
					{/* If the name matches any in our map, use the corresponding icon. If not, default to the Messenger icon */}
				</div>
				<div className="mt-2 font-serif text-lg font-black">
					{count} {name} templates
				</div>
				<div className="mt-2">{desc}</div>
			</div>
		</Link>
	);
};
export default Explore;
