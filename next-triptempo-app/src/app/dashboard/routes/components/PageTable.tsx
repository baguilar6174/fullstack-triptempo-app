'use client';

import React from 'react';

import { DataTable } from '@/components/DataTable';
import { useRoutesStore } from '@/stores/routes.store';
import { columns } from './Columns';

export const PageTable = (): JSX.Element => {
	const routes = useRoutesStore((state) => state.routes);
	const getAll = useRoutesStore((state) => state.getAll);

	React.useEffect(() => {
		void getAll();
	}, [getAll]);

	return <DataTable columns={columns} data={routes} filterBy="startCity" />;
};
