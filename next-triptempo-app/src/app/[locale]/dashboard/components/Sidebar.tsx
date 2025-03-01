'use client';

import React from 'react';
import { Home, MapPinnedIcon, Route } from 'lucide-react';
import Link from 'next/link';

import { cn } from '@/utils';
import { ONE } from '@/core';
import { Separator } from '@/components/ui/separator';
import { usePathname } from 'next/navigation';

const dataSidebar = [
	{
		sectionName: 'General',
		data: [
			{
				icon: Home,
				label: 'Home',
				href: '/dashboard'
			},
			{
				icon: MapPinnedIcon,
				label: 'Citites',
				href: '/dashboard/cities'
			},
			{
				icon: Route,
				label: 'Routes',
				href: '/dashboard/routes'
			}
		]
	}
];

export const Sidebar = (): JSX.Element => {
	const pathname = usePathname();

	return (
		<div className="flex flex-col justify-between h-full">
			<div>
				{dataSidebar.map(({ sectionName, data }, index) => (
					<div key={index} className="p-2 md:p-6">
						<p>{sectionName}</p>
						{data.map(({ label, href, icon: Icon }) => (
							<Link
								key={label}
								href={href}
								className={cn(
									'flex gap-x-2 mt-2 light:text-slate-700 dark:text-white text-sm items-center hover:bg-slate-300/20 p-2 rounded-lg cursor-pointer',
									pathname === href && 'bg-slate-400/20'
								)}
							>
								<Icon className="w-5 h-5" strokeWidth={ONE} />
								{label}
							</Link>
						))}
						<Separator />
					</div>
				))}
			</div>
			<footer className="mt-3 mb-8 p-3 text-center text-xs">
				{new Date().getFullYear()} © Trip Tempo All Rights Reserved
			</footer>
		</div>
	);
};
