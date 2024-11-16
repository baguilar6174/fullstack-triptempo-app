import { LoaderIcon } from 'lucide-react';
import React from 'react';

export const Loader = (): JSX.Element => {
	return (
		<div className="h-[70vh] flex flex-col justify-center items-center text-light">
			<LoaderIcon className="animate-spin" />
		</div>
	);
};
