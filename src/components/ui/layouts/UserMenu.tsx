import { Menu } from '@headlessui/react';
import { FaCaretDown } from 'react-icons/fa';
import Image from 'next/image';
import { FC } from 'react';
import { useRouter } from 'next/router';

interface User {
	name: string;
	image: string;
}

interface Link {
	label: string;
	redirect?: string;
	onClick?: () => void;
}

interface UserMenuProps {
	user: User;
	menuLinks: Link[];
}

const UserMenu: FC<UserMenuProps> = ({ user, menuLinks }) => {
	const router = useRouter();

	const handleLinkClick = (link: Link) => {
		if (link.onClick) {
			link.onClick();
		}
		if (link.redirect) {
			router.push(link.redirect);
		}
	};

	return (
		<Menu>
			{({ open }) => (
				<div className="relative">
					<Menu.Button className="flex items-center gap-2 px-2 py-1 text-xs bg-white border-2 border-black sm:text-sm">
						<Image width={16} height={16} src={user.image} className="w-5 h-5 rounded-full" alt="User image" />
						<div className="font-serif font-semibold">{user.name}</div>
						<FaCaretDown />
					</Menu.Button>
					{open && (
						<Menu.Items className="absolute right-0 z-30 w-56 mt-2 font-sans origin-top-right bg-white border-2 border-black divide-y divide-gray-100 ring-1 ring-black ring-opacity-5 focus:outline-none">
							<div className="py-1">
								{menuLinks.map((link, index) => (
									<Menu.Item key={index}>
										{({ active }) => (
											<a
												onClick={() => handleLinkClick(link)}
												className={`${
													active ? 'border-black' : 'border-transparent'
												} border-b-2 flex justify-between w-full px-4 py-2 text-xs sm:text-sm cursor-pointer`}
											>
												{link.label}
											</a>
										)}
									</Menu.Item>
								))}
							</div>
						</Menu.Items>
					)}
				</div>
			)}
		</Menu>
	);
};

export default UserMenu;
