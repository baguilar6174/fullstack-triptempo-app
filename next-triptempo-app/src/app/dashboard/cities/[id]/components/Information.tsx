import { type City } from '@/core';
import { User } from 'lucide-react';
import { PageDetailForm } from './Form';

interface PageDetailInformationProps {
	city: City;
}

export const PageDetailInformation = (props: PageDetailInformationProps): JSX.Element => {
	const { city } = props;
	return (
		<div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-x-10 gap-y-4">
			<div className="rounded-lg bg-background shadow-md hover:shadow-lg p-4">
				<div>
					<PageDetailForm city={city} />
				</div>
			</div>
			<div className="rounded-lf bg-background shadow-md hover:shadow-lg p-4 h-min">
				<div className="flex items-center justify-between gap-x-2">
					<div className="flex items-center gap-x-2">
						<User className="h-5 w-5" />
						Contacts
					</div>
					<div>
						<p>New contact...</p>
					</div>
				</div>
				<p>List contacts</p>
			</div>
		</div>
	);
};
