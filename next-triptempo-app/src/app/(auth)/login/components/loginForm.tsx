'use client';

import React from 'react';
import { cn } from '@/utils';
import { type z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { AlertCircle } from 'lucide-react';
import { useRouter } from 'next/navigation';

import { loginSchema } from '@/schemas';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { useAuthStore } from '@/stores/auth.store';
import { EMPTY_STRING } from '@/core';

interface LoginFormProps extends React.HTMLAttributes<HTMLDivElement> {}

export const LoginForm = ({ className, ...props }: LoginFormProps): JSX.Element => {
	const isLoading = useAuthStore((state) => state.isLoading);
	const login = useAuthStore((state) => state.login);
	const error = useAuthStore((state) => state.error);
	const isAuthenticated = useAuthStore((state) => state.isAuthenticated);
	const clearError = useAuthStore((state) => state.clearError);

	const router = useRouter();

	React.useEffect(() => {
		if (isAuthenticated) router.push('/dashboard');
	}, [isAuthenticated, router]);

	React.useEffect(() => {
		// TODO
		// Clear error when component unmounts or when username/password changes
		return () => {
			clearError();
		};
	}, [clearError]);

	const form = useForm<z.infer<typeof loginSchema>>({
		resolver: zodResolver(loginSchema),
		defaultValues: { email: EMPTY_STRING, password: EMPTY_STRING }
	});

	return (
		<div className={cn('grid gap-6', className)} {...props}>
			<Form {...form}>
				<form onSubmit={form.handleSubmit(onSubmit)} className="grid gap-2">
					<FormField
						control={form.control}
						name="email"
						render={({ field }) => (
							<FormItem className="grid gap-1">
								<FormLabel className="sr-only">Email</FormLabel>
								<FormControl>
									<Input
										disabled={isLoading}
										placeholder="Your email"
										autoCapitalize="none"
										autoComplete="email"
										autoCorrect="off"
										{...field}
									/>
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
					<FormField
						control={form.control}
						name="password"
						render={({ field }) => (
							<FormItem className="grid gap-1">
								<FormLabel className="sr-only">Password</FormLabel>
								<FormControl>
									<Input disabled={isLoading} placeholder="Your password" type="password" {...field} />
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
					{error && (
						<Alert variant="destructive" className="my-2">
							<AlertCircle className="h-4 w-4" />
							<AlertDescription>{error.message}</AlertDescription>
						</Alert>
					)}
					<Button type="submit" disabled={isLoading}>
						Sign In
					</Button>
				</form>
			</Form>
		</div>
	);

	async function onSubmit(data: z.infer<typeof loginSchema>): Promise<void> {
		const validateFields = loginSchema.safeParse(data);
		if (validateFields.success) {
			const { email, password } = validateFields.data;
			await login(email, password);
		}
	}
};
