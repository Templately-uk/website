import { SignedIn, SignedOut, UserButton } from '@clerk/nextjs';
import Link from 'next/link';
import Logo from '../Logo';
import Container from './Container';

const Header = () => {
	return (
		<header className="mt-4">
			<Container>
				<nav className="flex items-center justify-between font-serif text-inherit">
					<div className="w-1/3">
						<Link href="/">
							<Logo className="text-lg sm:text-inherit" />
						</Link>
					</div>
					<div className="w-1/3">
						<div className="flex items-center justify-center gap-4 text-xs sm:gap-10 sm:text-base">
							<Link href="/about">
								<div>About</div>
							</Link>
							<Link href="/search/">
								<div>Search</div>
							</Link>
						</div>
					</div>
					<div className="w-1/3">
						<div className="flex items-center justify-end gap-4">
							<SignedIn>
								<UserButton
									afterSignOutUrl="/"
									userProfileUrl={typeof window !== 'undefined' ? `${window.location.origin}/account` : undefined}
									userProfileMode={'navigation'}
								/>
							</SignedIn>
							<SignedOut>
								<Link href="/auth/sign-in">
									<button
										className="px-4 py-2 shadow-[-3px_3px_0_0_#000] border-l border-black text-xs sm:text-sm"
										type={'button'}
									>
										Sign In
									</button>
								</Link>
							</SignedOut>
						</div>
					</div>
				</nav>
			</Container>
		</header>
	);
};

export default Header;
