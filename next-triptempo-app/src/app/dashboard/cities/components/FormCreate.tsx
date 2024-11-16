'use client';

import { type Dispatch, type SetStateAction } from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import { Button } from '@/components/ui/button';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { EMPTY_STRING, FOUR, TWO, type Province } from '@/core';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useCitiesStore } from '@/stores/city.store';
import { Loader } from '@/components/Loader';

interface FormCreateProps {
	setOpenModal: Dispatch<SetStateAction<boolean>>;
	provinces: Province[];
}

const formSchema = z.object({
	id: z
		.string({ required_error: 'Please enter a id.' })
		.min(TWO, { message: `ID must be at least ${TWO} characters.` })
		.max(TWO, { message: `ID must be at most ${TWO} characters.` }),
	provinceId: z.string({ required_error: 'Please select a province.' }),
	name: z
		.string({ required_error: 'Please enter a name.' })
		.min(FOUR, { message: `Name must be at least ${FOUR} characters.` })
});

export const FormCreate = (props: FormCreateProps): JSX.Element => {
	const { setOpenModal, provinces } = props;

	const isLoading = useCitiesStore((state) => state.isLoading);
	// const updatedCity = useCitiesStore((state) => state.updatedCity);
	// const error = useCitiesStore((state) => state.error);
	const create = useCitiesStore((state) => state.create);

	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: { id: EMPTY_STRING, name: EMPTY_STRING }
	});

	if (isLoading) return <Loader />;

	return (
		<Form {...form}>
			<form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
				<div className="grid grid-cols-2 gap-3">
					<FormField
						control={form.control}
						name="provinceId"
						render={({ field }) => (
							<FormItem>
								<FormLabel>Province</FormLabel>
								<Select onValueChange={field.onChange} defaultValue={field.value}>
									<FormControl>
										<SelectTrigger>
											<SelectValue placeholder="Select a province" />
										</SelectTrigger>
									</FormControl>
									<SelectContent>
										{provinces.map((province) => (
											<SelectItem key={province.id} value={String(province.id)}>
												{province.name}
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
						name="id"
						render={({ field }) => (
							<FormItem>
								<FormLabel>City code</FormLabel>
								<FormControl>
									<Input placeholder="Enter city code" {...field} />
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
								<FormLabel>Name</FormLabel>
								<FormControl>
									<Input placeholder="Enter a city name" {...field} />
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
				</div>
				<div className="flex justify-end">
					<Button type="submit">Create City</Button>
				</div>
			</form>
		</Form>
	);

	async function onSubmit(values: z.infer<typeof formSchema>): Promise<void> {
		await create(values);
		setOpenModal(false);
	}
};
