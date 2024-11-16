import { Route } from 'lucide-react';
import { CustomIcon } from '../../../components/CustomIcon';

export const TotalRoutes = (): JSX.Element => {
	return (
		<div className="w-full p-5 mb-4 transition rounded-lg shadow-sm lg:mb-0 bg-background xl:w-96 hover:shadow-lg">
			<div className="flex gap-x-2 items-center">
				<CustomIcon icon={Route} />
				<p className="text-xl">Last Routes</p>
			</div>
			<div>Lorem ipsum dolor sit amet consectetur...</div>
		</div>
	);
};
