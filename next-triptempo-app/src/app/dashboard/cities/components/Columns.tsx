'use client';

import { type ColumnDef } from '@tanstack/react-table';
import { ArrowUpDown, Pencil, Trash } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { type City } from '@/core/entities';
import { useCitiesStore } from '@/stores/city.store';
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
	DialogTrigger
} from '@/components/ui/dialog';
import React from 'react';

export const columns: Array<ColumnDef<City>> = [
	{
		accessorKey: 'id',
		header: 'ID'
	},
	{
		accessorKey: 'name',
		header: ({ column }) => {
			return (
				<Button
					variant="ghost"
					onClick={() => {
						column.toggleSorting(column.getIsSorted() === 'asc');
					}}
				>
					Name
					<ArrowUpDown className="ml-2 h-4 w-4" />
				</Button>
			);
		}
	},
	{
		accessorKey: 'province',
		header: 'Province'
	},
	{
		accessorKey: 'region',
		header: 'Region'
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
	const { id } = props;

	const [openModal, setOpenModal] = React.useState<boolean>(false);

	const deleteCity = useCitiesStore((state) => state.delete);

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
						<DialogTitle>Remove city</DialogTitle>
						<DialogDescription>Are you sure you want to remove this city?</DialogDescription>
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
						<Button
							onClick={async () => {
								await deleteCity(id);
								setOpenModal(false);
							}}
						>
							Continue
						</Button>
					</div>
				</DialogContent>
			</Dialog>
		</div>
	);
};
