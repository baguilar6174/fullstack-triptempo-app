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
import { type Province } from '@/core';

interface PageHeaderProps {
	provinces: Province[];
}

export const PageHeader = (props: PageHeaderProps): JSX.Element => {
	const { provinces } = props;

	const [openModalCreate, setOpenModalCreate] = React.useState<boolean>(false);

	return (
		<div className="flex justify-between items-center">
			<Text tag="h2">Cities</Text>
			<Dialog open={openModalCreate} onOpenChange={setOpenModalCreate}>
				<DialogTrigger asChild>
					<Button>Create City</Button>
				</DialogTrigger>
				<DialogContent className="sm:max-w-[625px]">
					<DialogHeader>
						<DialogTitle>Create a new city</DialogTitle>
						<DialogDescription>Complete the form to create a new city.</DialogDescription>
					</DialogHeader>
					<FormCreate provinces={provinces} setOpenModal={setOpenModalCreate} />
				</DialogContent>
			</Dialog>
		</div>
	);
};
