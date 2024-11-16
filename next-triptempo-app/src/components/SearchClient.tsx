'use client';

import React from 'react';
import { type z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import { Container } from './Container';
import { Button } from './ui/button';
import { useTripItinerariesStore } from '../stores/tripItinerary.store';
import { ResultCard } from './ResultCard';
import { Loader } from './Loader';
import { ZERO } from '../core/contants';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Text } from './Text';
import { type City } from '@/core/entities';
import { Form, FormControl, FormField, FormItem, FormMessage } from './ui/form';
import { searchSchema } from '../schemas';

interface SearchProps {
	cities: City[];
}

export const SearchClient: React.FC<SearchProps> = (props: SearchProps) => {
	const { cities } = props;

	const isLoading = useTripItinerariesStore((state) => state.isLoading);
	const tripItineraries = useTripItinerariesStore((state) => state.tripItineraries);
	const error = useTripItinerariesStore((state) => state.error);
	const getTripItineraries = useTripItinerariesStore((state) => state.getTripItineraries);

	const form = useForm<z.infer<typeof searchSchema>>({ resolver: zodResolver(searchSchema) });

	const { getValues } = form;

	return (
		<Container>
			<Text tag="h1" className="text-center mt-5">
				Trip Tempo
			</Text>
			<Text tag="h3">Where do you wanna go?</Text>
			<Text tag="p">Find the perfect schedule for your trip!</Text>
			<Form {...form}>
				<form onSubmit={form.handleSubmit(onSubmit)} className="mt-5 grid grid-cols-1 lg:grid-cols-3 gap-8">
					<FormField
						control={form.control}
						name="startCity"
						render={({ field }) => (
							<FormItem>
								<Select onValueChange={field.onChange} defaultValue={field.value}>
									<FormControl>
										<SelectTrigger>
											<SelectValue placeholder="Where from?" />
										</SelectTrigger>
									</FormControl>
									<SelectContent>{getCities(getValues('endCity'))}</SelectContent>
								</Select>
								<FormMessage />
							</FormItem>
						)}
					/>
					<FormField
						control={form.control}
						name="endCity"
						render={({ field }) => (
							<FormItem>
								<Select onValueChange={field.onChange} defaultValue={field.value}>
									<FormControl>
										<SelectTrigger>
											<SelectValue placeholder="Where to?" />
										</SelectTrigger>
									</FormControl>
									<SelectContent>{getCities(getValues('startCity'))}</SelectContent>
								</Select>
								<FormMessage />
							</FormItem>
						)}
					/>
					<Button type="submit">Submit</Button>
				</form>
			</Form>
			{isLoading && <Loader />}
			{tripItineraries && tripItineraries.length === ZERO && (
				<div className="py-20 flex flex-col gap-2 justify-center items-center">
					<Text tag="h4">No results to show</Text>
					<Text tag="p">Try changing your search.</Text>
				</div>
			)}
			{tripItineraries && tripItineraries.length !== ZERO && (
				<React.Fragment>
					<Text tag="p">We&apos;ve found {tripItineraries.length} results</Text>
					{tripItineraries.map((tripItinerary) => (
						<ResultCard key={tripItinerary.id} tripItinerary={tripItinerary} />
					))}
				</React.Fragment>
			)}
			{error && <Text tag="p">{error.message}</Text>}
		</Container>
	);

	async function onSubmit(data: z.infer<typeof searchSchema>): Promise<void> {
		const { startCity, endCity } = data;
		await getTripItineraries(startCity, endCity);
	}

	function getCities(filter: string): React.JSX.Element[] {
		return cities
			.filter((city): boolean => city.id !== filter)
			.map((city) => (
				<SelectItem key={city.id} value={String(city.id)}>
					{city.name}, <span>{city.province}</span>
				</SelectItem>
			));
	}
};
