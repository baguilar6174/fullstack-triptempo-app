import React from 'react';

import { SearchClient } from '@/components/SearchClient';
import { CitiesService } from '../services/cities.service';

export default async function Home(): Promise<JSX.Element> {
	const { result } = await CitiesService.getAll();
	return <SearchClient cities={result} />;
}
