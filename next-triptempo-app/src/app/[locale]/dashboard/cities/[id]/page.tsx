import React from 'react';
import { redirect } from 'next/navigation';

import { CitiesService } from '@/services/cities.service';
import { PageDetailHeader } from './components/Header';
import { PageDetailInformation } from './components/Information';
import { PageDetailFooter } from './components/Footer';

export default async function CityDetailPage({ params }: { params: { id: string } }): Promise<JSX.Element> {
	if (!params.id) return redirect('/dashboard/cities');

	const { result } = await CitiesService.getCity(params.id);

	if (!result) return redirect('/dashboard/cities');

	return (
		<div>
			<PageDetailHeader />
			<PageDetailInformation city={result} />
			<PageDetailFooter id={result.id} />
		</div>
	);
}
