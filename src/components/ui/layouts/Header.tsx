import Link from 'next/link';
import Container from './Container';
import Logo from '../Logo';
import { useSession, signIn, signOut } from 'next-auth/react';
import UserMenu from './UserMenu';
import { FaSpinner } from 'react-icons/fa';
import { Session } from 'next-auth';

const Header = () => {
	const { data: session, status } = useSession();

	const user = (session as Session)?.user;
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
							{status === 'loading' ? (
								<div className="animate-spin">
									<FaSpinner />
								</div>
							) : user ? (
								<UserMenu
									//@ts-expect-error cannot be fixed
									user={user}
									menuLinks={[
										{
											label: 'My account',
											redirect: '/user/',
										},
										{
											label: 'Add template',
											redirect: '/publish/',
										},
										{
											label: 'Sign out',
											onClick: () => signOut(),
										},
									]}
								/>
							) : (
								<>
									<button
										className="px-4 py-2 shadow-[-3px_3px_0_0_#000] border-l border-black text-xs sm:text-sm"
										onClick={() => signIn()}
									>
										Sign In
									</button>
								</>
							)}
						</div>
					</div>
				</nav>
			</Container>
		</header>
	);
};

export default Header;
