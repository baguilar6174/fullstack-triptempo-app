'use client';

import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';

import { type City } from '@/core';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Button } from '../../../../../components/ui/button';

export const citySchema = z.object({
	id: z.string({ required_error: 'Please enter an id.' }),
	name: z.string({ required_error: 'Please enter a name.' })
});

interface PageDetailFormProps {
	city: City;
}

export const PageDetailForm = (props: PageDetailFormProps): JSX.Element => {
	const { city } = props;

	const form = useForm<z.infer<typeof citySchema>>({
		resolver: zodResolver(citySchema),
		defaultValues: { id: city.id, name: city.name }
	});

	return (
		<Form {...form}>
			<form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
				<div className="grid grid-cols-2 gap-3">
					<FormField
						control={form.control}
						name="id"
						render={({ field }) => (
							<FormItem>
								<FormLabel>City ID</FormLabel>
								<FormControl>
									<Input placeholder="Enter a city ID" type="text" {...field} />
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
					<FormField
						control={form.control}
						name="name"
						render={({ field }) => (
							<FormItem>
								<FormLabel>City name</FormLabel>
								<FormControl>
									<Input placeholder="Enter a city name" type="text" {...field} />
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
				</div>
				<Button type="submit">Edit City</Button>
			</form>
		</Form>
	);

	async function onSubmit(data: z.infer<typeof citySchema>): Promise<void> {
		const validateFields = citySchema.safeParse(data);
		if (validateFields.success) {
			const { id, name } = validateFields.data;
			// eslint-disable-next-line no-console
			console.log({ id, name });
		}
	}
};
