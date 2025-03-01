import React from 'react';
import { UsersRound } from 'lucide-react';

import { CardSummary } from './components/CardSummary';
import { LastRoutes } from './components/LastRoutes';
import { TotalRoutes } from './components/TotalRoutes';
import { TotalRoutes1 } from './components/TotalRoutes1';

export default function DashboardPage(): JSX.Element {
	return (
		<div>
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 lg:gap-x-20">
				<CardSummary
					icon={UsersRound}
					total="12.450"
					average={15}
					title="Available cities"
					tooltipText="See all available cities"
				/>
				<CardSummary
					icon={UsersRound}
					total="12.450"
					average={21}
					title="Available cities"
					tooltipText="See all available cities"
				/>
				<CardSummary
					icon={UsersRound}
					total="12.450"
					average={80}
					title="Available cities"
					tooltipText="See all available cities"
				/>
			</div>
			<div className="grid grid-cols-1 xl:grid-cols-2 md:gap-x-10 mt-12">
				<LastRoutes />
				<LastRoutes />
			</div>
			<div className="flex-col md:gap-x-10 xl:flex xl:flex-row gap-y-4 md:gap-y-0 mt-12 md:mb-10 justify-center">
				<TotalRoutes />
				<TotalRoutes1 />
			</div>
		</div>
	);
}
