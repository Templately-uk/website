import Image from 'next/image';
import Link from 'next/link';
import SVGDoodle from '../../../../public/doodles/footer.svg';
import Logo from '../Logo';
import Container from './Container';

const Footer = () => {
	return (
		<footer className="mt-20">
			<Container>
				<div className="py-8">
					<div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
						<div className="relative">
							<div className="text-teal-600">
								<Logo className="text-xl" />
							</div>
							<p className="max-w-xs mt-4 text-xs text-gray-500 sm:text-sm">
								Your ultimate source for diverse email templates for personal and professional use.
							</p>
							<div className="absolute z-30" style={{ top: '100px', left: '0' }}>
								<Image className="" width={60} alt="doodle" src={SVGDoodle} />
							</div>
						</div>

						<div className="hidden grid-cols-1 gap-8 md:grid mt-30 sm:grid-cols-2 lg:col-span-2 lg:grid-cols-3">
							<div>
								<p className="font-serif font-bold text-gray-900">Templately</p>

								<ul className="mt-6 space-y-4 text-xs sm:text-sm">
									<li>
										<Link href="/">
											<div className="text-gray-700 transition hover:opacity-75">Home</div>
										</Link>
									</li>

									<li>
										<Link href="/search">
											<div className="text-gray-700 transition hover:opacity-75">Search</div>
										</Link>
									</li>

									<li>
										<Link href="/editor">
											<div className="text-gray-700 transition hover:opacity-75">Editor</div>
										</Link>
									</li>
								</ul>
							</div>

							<div>
								<p className="font-serif font-bold text-gray-900">Templates</p>
								<ul className="mt-6 space-y-4 text-xs sm:text-sm">
									<li>
										<Link href="/search?category=professional">
											<div className="text-gray-700 transition hover:opacity-75">Professional</div>
										</Link>
									</li>
									<li>
										<Link href="/search?category=personal">
											<div className="text-gray-700 transition hover:opacity-75">Personal</div>
										</Link>
									</li>
									<li>
										<Link href="/search?category=sales%20and%20marketing">
											<div className="text-gray-700 transition hover:opacity-75">Sales</div>
										</Link>
									</li>
									<li>
										<Link href="/search?category=career%20development">
											<div className="text-gray-700 transition hover:opacity-75">Career</div>
										</Link>
									</li>
								</ul>
							</div>

							<div>
								<p className="font-medium text-gray-900">Docs</p>

								<ul className="mt-6 space-y-4 text-xs sm:text-sm">
									<li>
										<Link href="/legal/privacy">
											<div className="text-gray-700 transition hover:opacity-75">Privacy Policy</div>
										</Link>
									</li>

									<li>
										<Link href="/legal/conditions">
											<div className="text-gray-700 transition hover:opacity-75">Terms and Conditions</div>
										</Link>
									</li>

									<li>
										<Link href="/legal/cookie">
											<div className="text-gray-700 transition hover:opacity-75">Cookie Policy</div>
										</Link>
									</li>
								</ul>
							</div>
						</div>
					</div>
					<div className="mt-20 font-serif text-xs text-gray-500 sm:text-xs">
						&copy; 2023. Templately. All rights reserved.
					</div>
				</div>
			</Container>
		</footer>
	);
};

export default Footer;
