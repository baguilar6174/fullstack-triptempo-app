import Link from 'next/link';

import { ButtonTheme } from './ButtonTheme';

export const Navbar = (): JSX.Element => {
	return (
		<nav className="fixed w-full z-10 shadow-sm bg-background px-2 gap-x-4 md:px-6">
			<div className="border-b">
				<div className="flex flex-row items-center justify-between gap-3 md:gap-0 py-3">
					<Link href={'/'} className="hover:text-light">
						Trip Tempo
					</Link>
					<div className="flex">
						<ButtonTheme />
					</div>
				</div>
			</div>
		</nav>
	);
};
