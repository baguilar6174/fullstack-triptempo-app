import Link from 'next/link';

import { Text } from '@/components/Text';

export default async function NotFoundPage(): Promise<JSX.Element> {
	return (
		<div className="!h-[calc(100vh-160px)] md:!h-[calc(100vh-144px)] w-full flex flex-col items-center justify-center">
			<Text tag="h1">404 | Page not found</Text>
			<Link href="/" className="pt-10 text-2xl font-bold text-primary dark:text-primaryDark">
				<span>←</span>&nbsp;Go to home
			</Link>
		</div>
	);
}
