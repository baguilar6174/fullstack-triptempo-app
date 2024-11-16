'use client';

import React from 'react';
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
	DialogTrigger
} from '@/components/ui/dialog';
import { Text } from '@/components/Text';
import { Button } from '@/components/ui/button';
import { FormCreate } from './FormCreate';
import { type Provider, type City } from '@/core';

interface PageHeaderProps {
	cities: City[];
	providers: Provider[];
}

export const PageHeader = (props: PageHeaderProps): JSX.Element => {
	const { cities, providers } = props;

	const [openModalCreate, setOpenModalCreate] = React.useState<boolean>(false);

	return (
		<div className="flex justify-between items-center">
			<Text tag="h2">Routes</Text>
			<Dialog open={openModalCreate} onOpenChange={setOpenModalCreate}>
				<DialogTrigger asChild>
					<Button>Create route</Button>
				</DialogTrigger>
				<DialogContent className="sm:max-w-[625px]">
					<DialogHeader>
						<DialogTitle>Create a new route</DialogTitle>
						<DialogDescription>Complete the form to create a route</DialogDescription>
					</DialogHeader>
					<FormCreate setOpenModal={setOpenModalCreate} citites={cities} providers={providers} />
				</DialogContent>
			</Dialog>
		</div>
	);
};
