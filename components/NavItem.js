import React from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';

const NavItem = ({ name, href }) => {
	const router = useRouter();
	return (
		<li className="mr-3">
			<Link href={href}>
				<a
					className={`${router.pathname === href ? 'text-app-green' : 'text-app-slate hover:text-app-green' } inline-block py-2 px-4 no-underline`}
				>
					{name}
				</a>
			</Link>
		</li>
	);
};

export default NavItem;
