import { SignedIn } from '@clerk/nextjs';
import Link from 'next/link';
import Search from '../Search/Search';
import { Button } from '../ui/Button';

const SearchComponent: React.FC = () => {
	return (
		<div className="mt-20">
			<div className="max-w-4xl mx-auto">
				<Search frontPage={true} />
				<SignedIn>
					<div className="mt-10">
						<div className="flex justify-center mt-8 text-sm">
							<div className="relative">
								<Link href="/account/publish">
									<Button className="px-3 py-2 font-serif font-bold text-black border-2 border-black">
										Publish your own
									</Button>
								</Link>
							</div>
						</div>
					</div>
				</SignedIn>
			</div>
		</div>
	);
};

export default SearchComponent;
