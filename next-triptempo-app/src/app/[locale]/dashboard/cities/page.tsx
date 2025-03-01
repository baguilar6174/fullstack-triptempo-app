import React from 'react';

import { PageHeader } from './components/PageHeader';
import { ProvincesService } from '@/services/provinces.service';
import { PageTable } from './components/PageTable';

export default async function CitiesPage(): Promise<JSX.Element> {
	const { result: provinces } = await ProvincesService.getAll();

	return (
		<div>
			<PageHeader provinces={provinces} />
			<PageTable />
		</div>
	);
}
