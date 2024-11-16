import { type LucideIcon } from 'lucide-react';
import { ONE } from '../core';

interface CustomIconProps {
	icon: LucideIcon;
}

export const CustomIcon = (props: CustomIconProps): JSX.Element => {
	const { icon: Icon } = props;

	return (
		<div className="p-2 bg-slate-400/20 rounded-lg">
			<Icon strokeWidth={ONE} className="w-4 h-4" />
		</div>
	);
};
