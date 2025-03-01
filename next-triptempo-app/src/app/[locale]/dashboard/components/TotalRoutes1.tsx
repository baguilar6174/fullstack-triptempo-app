import { Route } from 'lucide-react';
import { CustomIcon } from '../../../components/CustomIcon';

export const TotalRoutes1 = (): JSX.Element => {
	return (
		<div className="shadow-sm bg-background rounded-lg p-5 flex-1">
			<div className="flex gap-x-2 items-center">
				<CustomIcon icon={Route} />
				<p className="text-xl">Last Routes</p>
			</div>
			<div>Lorem ipsum dolor sit amet consectetur...</div>
		</div>
	);
};
