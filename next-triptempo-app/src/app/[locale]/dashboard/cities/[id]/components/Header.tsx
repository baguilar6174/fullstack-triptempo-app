'use client';

import { ArrowLeft } from 'lucide-react';
import { useRouter } from 'next/navigation';

export const PageDetailHeader = (): JSX.Element => {
	const router = useRouter();

	return (
		<div className="flex items-center text-xl">
			<ArrowLeft
				className="mr-2 h-5 w-5 cursor-pointer"
				onClick={() => {
					router.push('/dashboard/cities');
				}}
			/>
			Edit city
		</div>
	);
};
