import { Route } from 'lucide-react';

import { CustomIcon } from '@/components/CustomIcon';

export const LastRoutes = (): JSX.Element => {
	return (
		<div className="shadow-sm bg-background rounded-lg p-5">
			<div className="flex gap-x-2 items-center">
				<CustomIcon icon={Route} />
				<p className="text-xl">Last Routes</p>
			</div>
			<div>
				<p>Table</p>
			</div>
		</div>
	);
};
