'use client';

import { useRouter } from 'next/navigation';

import { Button } from '@/components/ui/button';
import { Trash } from 'lucide-react';

interface PageDetailFooterProps {
	id: string;
}

export const PageDetailFooter = (props: PageDetailFooterProps): JSX.Element => {
	const { id } = props;

	const router = useRouter();

	return (
		<div className="flex justify-end mt-5">
			<Button variant="destructive" onClick={onDeleteCity}>
				<Trash className="h-4 w-4 mr-2" />
				Delete
			</Button>
		</div>
	);

	function onDeleteCity(): void {
		// eslint-disable-next-line no-console
		console.log('Delete city with id:', id);
		router.push('/dashboard/cities');
	}
};
