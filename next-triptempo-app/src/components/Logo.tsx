'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { BusIcon } from 'lucide-react';

export const Logo = (): JSX.Element => {
	const router = useRouter();

	return (
		<div
			className="min-h-20 h-20 flex items-center px-6 border-b cursor-pointer gap-2"
			onClick={() => {
				router.push('/dashboard');
			}}
		>
			<BusIcon />
			<h1 className="font-bold text-xl">My Dashboard</h1>
		</div>
	);
};
