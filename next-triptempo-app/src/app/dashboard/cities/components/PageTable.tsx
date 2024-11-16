'use client';

import React from 'react';

import { DataTable } from '@/components/DataTable';
import { columns } from './Columns';
import { useCitiesStore } from '@/stores/city.store';

export const PageTable = (): JSX.Element => {
	const cities = useCitiesStore((state) => state.cities);
	const getAll = useCitiesStore((state) => state.getAll);

	React.useEffect(() => {
		void getAll();
	}, [getAll]);

	return <DataTable columns={columns} data={cities} filterBy="name" />;
};
