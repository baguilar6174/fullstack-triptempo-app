'use client';

import React from 'react';
import { Text } from '@/components/Text';

interface ErrorStateProps {
	error: Error;
}

const ErrorState: React.FC<ErrorStateProps> = ({ error }) => {
	React.useEffect(() => {
		// console.error(error);
	}, [error]);

	return (
		<div className="flex flex-col gap-2 justify-center items-center">
			<Text tag="h4">Uh Oh</Text>
			<Text tag="p">Something went wrong!</Text>
			<Text tag="p">{error.message}</Text>
		</div>
	);
};

export default ErrorState;
