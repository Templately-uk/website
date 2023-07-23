import { useFetchMetrics } from '@/hooks/useFetchMetrics';
import { useSearchTemplates } from '@/hooks/useFetchSearch';
import { Categories } from '@/types/Category';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { BsArrowRight } from 'react-icons/bs';
import { FiLoader } from 'react-icons/fi';
import Container from '../ui/layouts/Container';
import Layout from '../ui/layouts/Layout';
import Search from './Search';
import SearchPagination from './SearchPagination';
import SearchTemplateCard from './SearchTemplateCard';

const sorts = [
	{ name: 'Most recent', sort: 'createdAt', order: 'desc' },
	{ name: 'Most popular', sort: 'views', order: 'desc' },
	{ name: 'Highest rated', sort: 'votes', order: 'desc' },
	{ name: 'Least recent', sort: 'createdAt', order: 'asc' },
];

interface Props {
	initialSearch: string;
}
const SearchComponent = ({ initialSearch }: Props) => {
	const router = useRouter();

	const [offset, setOffset] = useState(0);
	const [limit] = useState(12);

	// Search filters and sorting
	const initialCategory = router.query.category as string;
	const [categories, setCategories] = useState(initialCategory ? [initialCategory] : []);
	const [tags] = useState('');
	const [sort, setSort] = useState('createdAt');
	const [order, setOrder] = useState('desc');

	// Fetch data for search templates and categories
	const { data: metrics } = useFetchMetrics();
	const { data: templates } = useSearchTemplates(initialSearch, limit, offset, categories, tags, sort, order);

	const onNextPage = () => {
		setOffset((prevOffset) => prevOffset + limit);
	};
	const onPrevPage = () => {
		setOffset((prevOffset) => Math.max(0, prevOffset - limit));
	};

	return (
		<Layout title={`Search: ${initialSearch}`}>
			<Container>
				{/* Breadcrumb */}
				<section className="mt-6">
					<nav className="flex font-serif" aria-label="Breadcrumb">
						<ol className="inline-flex items-center gap-3">
							<li className="inline-flex items-center">
								<a href="#" className="">
									Home
								</a>
							</li>
							<li>
								<div className="flex items-center gap-2">
									<BsArrowRight />
									<div className="font-medium">Search</div>
								</div>
							</li>
							<li>
								<div className="flex items-center gap-2">
									<BsArrowRight />
									<div className="font-medium text-gray-500">{initialSearch}</div>
								</div>
							</li>
						</ol>
					</nav>
					{/* Search bar */}
					<section>
						<Search initialSearch={initialSearch} />
						<div className="flex items-center gap-1 font-serif font-black tracking-wide">
							<div>
								{templates ? (
									<>{templates.totalHits}</>
								) : (
									<div className="flex items-center gap-1">
										<FiLoader className="font-medium animate-spin" />
									</div>
								)}
							</div>
							<div>Results</div>
							<div className="font-medium">
								({templates?.timeTaken ? (templates.timeTaken / 1000).toFixed(2) : 0} secs)
							</div>
						</div>
					</section>
					{/* Main content */}
					<section className="grid grid-cols-12 mt-6 sm:gap-12">
						<div className="order-2 col-span-12 sm:col-span-3 sm:order-1">
							<div className="mt-2">
								<div className="font-serif font-bold">Sort by</div>
								<div className="mt-2 ">
									{sorts.map((sortOption, index) => (
										<div key={index} className="mb-3">
											<div className="flex items-center gap-2">
												<input
													type="radio"
													name="sort"
													value={sortOption.sort}
													className="w-6 h-6 border-2 border-black appearance-none accent-black focus:ring-0 checked:bg-black focus:bg-black"
													onChange={() => {
														setSort(sortOption.sort);
														setOrder(sortOption.order);
													}}
													checked={sort === sortOption.sort && order === sortOption.order}
												/>
												<div className="">{sortOption.name}</div>
											</div>
										</div>
									))}
								</div>
							</div>

							<div className="mt-10">
								<div className="font-serif font-bold">Category</div>
								<div className="mt-2">
									{metrics ? (
										<>
											{Object.keys(Categories).map((_, index) => (
												<div key={index} className="mb-3">
													<div className="flex items-center gap-2">
														<input
															type="checkbox"
															value={String(_)}
															className="w-6 h-6 border-2 border-black appearance-none accent-black focus:ring-0 checked:bg-black focus:bg-black"
															onChange={(e) => {
																if (e.target.checked) {
																	setCategories((prev) => [...prev, e.target.value]);
																} else {
																	setCategories((prev) => prev.filter((category) => category !== e.target.value));
																}
															}}
															checked={categories.includes(String(_))}
														/>
														<div className="capitalize">{String(_)}</div>
													</div>
												</div>
											))}
										</>
									) : (
										<>
											<div className="w-full h-8 bg-black/10 animate-pulse"></div>
											<div className="w-full h-8 mt-2 bg-black/10 animate-pulse"></div>
											<div className="w-full h-8 mt-2 bg-black/10 animate-pulse"></div>
											<div className="w-full h-8 mt-2 bg-black/10 animate-pulse"></div>
										</>
									)}
								</div>
							</div>
						</div>
						<div className="order-1 col-span-12 mb-10 sm:col-span-9 sm:order-2 sm:mb-0">
							<div className="">
								{templates ? (
									<>
										{templates.hits.map((template, index) => (
											<Link href={`/templates/${template.route}`} key={index}>
												<SearchTemplateCard template={template} />
											</Link>
										))}
									</>
								) : (
									<>
										<div className="w-full h-[200px] bg-black/5 animate-pulse"></div>
										<div className="w-full h-[200px] bg-black/5 animate-pulse mt-1"></div>
									</>
								)}

								{templates && (
									<SearchPagination
										currentPage={templates.currentPage}
										totalPages={templates.totalPages}
										onPrevPage={onPrevPage}
										onNextPage={onNextPage}
									/>
								)}
							</div>
						</div>
					</section>
				</section>
			</Container>
		</Layout>
	);
};

export default SearchComponent;
