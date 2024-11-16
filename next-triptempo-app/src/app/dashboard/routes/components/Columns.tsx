'use client';

import { type ColumnDef } from '@tanstack/react-table';
import { Pencil, Trash } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { type Route } from '@/core/entities';
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
	DialogTrigger
} from '@/components/ui/dialog';
import React from 'react';

export const columns: Array<ColumnDef<Route>> = [
	{
		accessorKey: 'startCity',
		header: 'Start City'
	},
	{
		accessorKey: 'endCity',
		header: 'End City'
	},
	{
		accessorKey: 'distance',
		header: 'Distance'
	},
	{
		accessorKey: 'price',
		header: 'Price'
	},
	{
		accessorKey: 'estimatedTravelTime',
		header: 'Estimated Travel Time'
	},
	{
		accessorKey: 'transportationProvider',
		header: 'Transportation Provider'
	},
	{
		id: 'actions',
		header: 'Actions',
		cell: ({ row }) => <TableActions id={row.original.id} />
	}
];

interface TableActionsProps {
	id: string;
}

export const TableActions = (props: TableActionsProps): JSX.Element => {
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const { id } = props;

	const [openModal, setOpenModal] = React.useState<boolean>(false);

	return (
		<div className="flex gap-x-2">
			<Button size="icon">
				<Pencil className="h-4 w-4" />
			</Button>
			<Dialog open={openModal} onOpenChange={setOpenModal}>
				<DialogTrigger asChild>
					<Button variant="destructive" size="icon">
						<Trash className="h-4 w-4" />
					</Button>
				</DialogTrigger>
				<DialogContent className="sm:max-w-[625px]">
					<DialogHeader>
						<DialogTitle>Remove route</DialogTitle>
						<DialogDescription>Are you sure you want to remove this route?</DialogDescription>
					</DialogHeader>
					<div className="flex justify-end gap-x-2">
						<Button
							variant="outline"
							onClick={() => {
								setOpenModal(false);
							}}
						>
							Cancel
						</Button>
						<Button>Continue</Button>
					</div>
				</DialogContent>
			</Dialog>
		</div>
	);
};
