'use client';

import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { LogOut, Menu, Search } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { ONE } from '@/core';
import { Button } from '@/components/ui/button';
import { useAuthStore } from '@/stores/auth.store';
import { Sidebar } from './Sidebar';

export const DashboardNavbar = (): JSX.Element => {
	const logout = useAuthStore((state) => state.logout);

	return (
		<div className="flex items-center px-2 gap-x-4 md:px-6 justify-between w-full bg-background border-b h-20">
			<div className="block xl:hidden">
				<Sheet>
					<SheetTrigger className="flex items-center">
						<Menu />
					</SheetTrigger>
					<SheetContent side={'left'}>
						<SheetHeader>
							<SheetTitle>Dashboard</SheetTitle>
							<SheetDescription>Control Trip Tempo App</SheetDescription>
						</SheetHeader>
						<Sidebar />
					</SheetContent>
				</Sheet>
			</div>
			<div className="relative w-[300px]">
				<Input placeholder="Search ..." />
				<Search strokeWidth={ONE} className="absolute right-2 top-2" />
			</div>
			<div className="flex items-center gap-x-2">
				<Button variant="outline" onClick={logout} className="px-[5px]">
					<LogOut strokeWidth={ONE} />
				</Button>
			</div>
		</div>
	);
};
