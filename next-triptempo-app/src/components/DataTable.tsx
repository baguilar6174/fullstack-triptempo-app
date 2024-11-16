'use client';

import React from 'react';
import {
	type ColumnFiltersState,
	type SortingState,
	type ColumnDef,
	useReactTable,
	getCoreRowModel,
	getPaginationRowModel,
	getSortedRowModel,
	getFilteredRowModel,
	flexRender
} from '@tanstack/react-table';

import { Input } from '@/components/ui/input';
import { EMPTY_STRING } from '@/core';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Button } from './ui/button';

interface DataTableProps<TData, TValue> {
	columns: Array<ColumnDef<TData, TValue>>;
	data: TData[];
	filterBy?: string;
}

export function DataTable<TData, TValue>(props: DataTableProps<TData, TValue>): JSX.Element | null {
	const { columns, data, filterBy } = props;

	const [sorting, setSorting] = React.useState<SortingState>([]);
	const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>([]);
	const [isMounted, setIsMounted] = React.useState<boolean>(false);

	React.useEffect(() => {
		setIsMounted(true);
	}, []);

	// TODO: implement global filter

	const table = useReactTable({
		data,
		columns,
		getCoreRowModel: getCoreRowModel(),
		getPaginationRowModel: getPaginationRowModel(),
		onSortingChange: setSorting,
		getSortedRowModel: getSortedRowModel(),
		onColumnFiltersChange: setColumnFilters,
		getFilteredRowModel: getFilteredRowModel(),
		state: {
			sorting,
			columnFilters
		}
	});

	if (!isMounted) return null;

	return (
		<div className="p-4 bg-background shadow-md rounded-lg mt-4">
			{filterBy && (
				<div className="flex items-center mb-2">
					<Input
						placeholder="Filter..."
						value={(table.getColumn(filterBy)?.getFilterValue() as string) ?? EMPTY_STRING}
						onChange={(event) => table.getColumn(filterBy)?.setFilterValue(event.target.value)}
					/>
				</div>
			)}
			<div className="rounded-md border">
				<Table>
					<TableHeader>
						{table.getHeaderGroups().map((headerGroup) => (
							<TableRow key={headerGroup.id}>
								{headerGroup.headers.map((header) => {
									return (
										<TableHead key={header.id}>
											{header.isPlaceholder ? null : flexRender(header.column.columnDef.header, header.getContext())}
										</TableHead>
									);
								})}
							</TableRow>
						))}
					</TableHeader>
					<TableBody>
						{table.getRowModel().rows?.length ? (
							table.getRowModel().rows.map((row) => (
								<TableRow key={row.id} data-state={row.getIsSelected() && 'selected'}>
									{row.getVisibleCells().map((cell) => (
										<TableCell key={cell.id}>{flexRender(cell.column.columnDef.cell, cell.getContext())}</TableCell>
									))}
								</TableRow>
							))
						) : (
							<TableRow>
								<TableCell colSpan={columns.length} className="h-24 text-center">
									No results.
								</TableCell>
							</TableRow>
						)}
					</TableBody>
				</Table>
			</div>
			<div className="flex items-center justify-end space-x-2 py-4">
				<Button
					variant="outline"
					size="sm"
					onClick={() => {
						table.previousPage();
					}}
					disabled={!table.getCanPreviousPage()}
				>
					Previous
				</Button>
				<Button
					variant="outline"
					size="sm"
					onClick={() => {
						table.nextPage();
					}}
					disabled={!table.getCanNextPage()}
				>
					Next
				</Button>
			</div>
		</div>
	);
}
