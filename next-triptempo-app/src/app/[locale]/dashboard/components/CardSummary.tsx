import React from 'react';

import { MoveDownRight, MoveUpRight, TrendingUp, type LucideIcon } from 'lucide-react';
import { CustomIcon } from '@/components/CustomIcon';
import { CustomTooltip } from '@/components/CustomTooltip';
import { cn } from '@/utils';
import { SEVENTY, TWENTY } from '@/core';

interface CardSummaryProps {
	icon: LucideIcon;
	total: string;
	average: number;
	title: string;
	tooltipText: string;
}

export const CardSummary = (props: CardSummaryProps): JSX.Element => {
	const { icon, total, average, title, tooltipText } = props;

	return (
		<div className="shadow-sm bg-background rounded-lg p-5 py-3 hover:shadow-lg transition">
			<div className="flex justify-between">
				<div className="flex items-center gap-2">
					<CustomIcon icon={icon} />
					{title}
				</div>
				<CustomTooltip content={tooltipText} />
			</div>
			<div className="flex gap-4 mt-2 md:mt-4">
				<p className="text-2xl">{total}</p>
				<div
					className={cn(
						'flex items-center gap-1 px-2 text-xs text-white rounded-lg h-[20px] bg-black  dark:bg-secondary'
					)}
				>
					{average}%{average < TWENTY && <MoveDownRight strokeWidth={2} className="h-4 w-4" />}
					{average > TWENTY && average < SEVENTY && <MoveUpRight strokeWidth={2} className="h-4 w-4" />}
					{average > SEVENTY && <TrendingUp strokeWidth={2} className="h-4 w-4" />}
				</div>
			</div>
		</div>
	);
};
