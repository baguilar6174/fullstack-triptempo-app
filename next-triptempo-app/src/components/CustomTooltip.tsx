import { Info } from 'lucide-react';

import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { ONE } from '@/core';

interface CustomTooltipProps {
	content: string;
}

export const CustomTooltip = (props: CustomTooltipProps): JSX.Element => {
	const { content } = props;

	return (
		<TooltipProvider>
			<Tooltip>
				<TooltipTrigger>
					<Info strokeWidth={ONE} className="w-5 h-5" />
				</TooltipTrigger>
				<TooltipContent>
					<p>{content}</p>
				</TooltipContent>
			</Tooltip>
		</TooltipProvider>
	);
};
