'use client';

import { type Dispatch, type SetStateAction } from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import { Button } from '@/components/ui/button';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { EMPTY_STRING, type Provider, type City } from '@/core';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useCitiesStore } from '@/stores/city.store';
import { Loader } from '@/components/Loader';

interface FormCreateProps {
	setOpenModal: Dispatch<SetStateAction<boolean>>;
	citites: City[];
	providers: Provider[];
}

const formSchema = z.object({
	startCityId: z.string({ required_error: 'Please select a start city.' }),
	endCityId: z.string({ required_error: 'Please select an end city.' }),
	transportationProviderId: z.string({ required_error: 'Please select a transportation provider.' }),
	distance: z.string({ required_error: 'Please enter a distance.' }),
	estimatedTravelTime: z.string({ required_error: 'Please enter an estimated travel time.' }),
	price: z.string({ required_error: 'Please enter a price.' })
});

export const FormCreate = (props: FormCreateProps): JSX.Element => {
	const { setOpenModal, citites, providers } = props;

	const isLoading = useCitiesStore((state) => state.isLoading);
	// const create = useCitiesStore((state) => state.create);

	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: { distance: EMPTY_STRING, estimatedTravelTime: EMPTY_STRING, price: EMPTY_STRING }
	});

	if (isLoading) return <Loader />;

	return (
		<Form {...form}>
			<form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
				<div className="grid grid-cols-2 gap-3">
					<FormField
						control={form.control}
						name="startCityId"
						render={({ field }) => (
							<FormItem>
								<FormLabel>Origin</FormLabel>
								<Select onValueChange={field.onChange} defaultValue={field.value}>
									<FormControl>
										<SelectTrigger>
											<SelectValue placeholder="Select an origin city" />
										</SelectTrigger>
									</FormControl>
									<SelectContent>
										{citites.map((city) => (
											<SelectItem key={city.id} value={String(city.id)}>
												{city.name}, <span>{city.province}</span>
											</SelectItem>
										))}
									</SelectContent>
								</Select>
								<FormMessage />
							</FormItem>
						)}
					/>
					<FormField
						control={form.control}
						name="endCityId"
						render={({ field }) => (
							<FormItem>
								<FormLabel>Destination</FormLabel>
								<Select onValueChange={field.onChange} defaultValue={field.value}>
									<FormControl>
										<SelectTrigger>
											<SelectValue placeholder="Select an destination city" />
										</SelectTrigger>
									</FormControl>
									<SelectContent>
										{citites.map((city) => (
											<SelectItem key={city.id} value={String(city.id)}>
												{city.name}, <span>{city.province}</span>
											</SelectItem>
										))}
									</SelectContent>
								</Select>
								<FormMessage />
							</FormItem>
						)}
					/>
					<FormField
						control={form.control}
						name="transportationProviderId"
						render={({ field }) => (
							<FormItem>
								<FormLabel>Provider</FormLabel>
								<Select onValueChange={field.onChange} defaultValue={field.value}>
									<FormControl>
										<SelectTrigger>
											<SelectValue placeholder="Select a transportation provider" />
										</SelectTrigger>
									</FormControl>
									<SelectContent>
										{providers.map((provider) => (
											<SelectItem key={provider.id} value={provider.id}>
												{provider.name}
											</SelectItem>
										))}
									</SelectContent>
								</Select>
								<FormMessage />
							</FormItem>
						)}
					/>
					<FormField
						control={form.control}
						name="distance"
						render={({ field }) => (
							<FormItem>
								<FormLabel>Distance</FormLabel>
								<FormControl>
									<Input placeholder="Enter aproximate distance" {...field} />
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
					<FormField
						control={form.control}
						name="estimatedTravelTime"
						render={({ field }) => (
							<FormItem>
								<FormLabel>Travel time</FormLabel>
								<FormControl>
									<Input placeholder="Enter aproximate travel time" {...field} />
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
					<FormField
						control={form.control}
						name="price"
						render={({ field }) => (
							<FormItem>
								<FormLabel>Price</FormLabel>
								<FormControl>
									<Input placeholder="Enter an aproximate price" {...field} />
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
				</div>
				<div className="flex justify-end">
					<Button type="submit">Create route</Button>
				</div>
			</form>
		</Form>
	);

	async function onSubmit(values: z.infer<typeof formSchema>): Promise<void> {
		const { startCityId, endCityId, transportationProviderId, ...rest } = values;
		const id = `${startCityId}-${endCityId}-${transportationProviderId}`;
		// eslint-disable-next-line no-console
		console.log({
			id,
			startCityId,
			endCityId,
			transportationProviderId,
			...rest
		});
		setOpenModal(false);
	}
};
