'use client'; // Should be at the top for client-side components

import Link from 'next/link'; // Correct import for Link
import {
	HomeIcon,
	DocumentDuplicateIcon,
	UserGroupIcon,
} from '@heroicons/react/24/outline';
import clsx from 'clsx';
import { usePathname } from 'next/navigation';

const links = [
	{ name: 'Home', href: '/dashboard', icon: HomeIcon },
	{
		name: 'Invoices',
		href: '/dashboard/invoices',
		icon: DocumentDuplicateIcon,
	},
	{ name: 'Customers', href: '/dashboard/customers', icon: UserGroupIcon },
];

export default function NavLinks() {
	const pathname = usePathname();

	return (
		<>
			{links.map((link) => {
				const LinkIcon = link.icon;
				return (
					<Link
						key={link.name}
						href={link.href}
						className={clsx('flex items-center gap-2 p-3 text-sm font-medium', {
							'bg-sky-100 text-blue-600': pathname === link.href,
						})}
					>
						<LinkIcon className='w-6' />
						<p>{link.name}</p>
					</Link>
				);
			})}
		</>
	);
}
