import React from 'react';

import { PageTable } from './components/PageTable';
import { PageHeader } from './components/PageHeader';
import { CitiesService } from '@/services/cities.service';
import { ProvidersService } from '@/services/providers.service';

export default async function RoutesPage(): Promise<JSX.Element> {
	const { result: cities } = await CitiesService.getAll();
	const { result: providers } = await ProvidersService.getAll();

	return (
		<div>
			<PageHeader cities={cities} providers={providers} />
			<PageTable />
		</div>
	);
}
