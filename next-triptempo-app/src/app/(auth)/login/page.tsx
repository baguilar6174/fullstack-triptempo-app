import React from 'react';
import { LoginForm } from './components/loginForm';
import { Text } from '@/components/Text';

export default function LoginPage(): JSX.Element {
	return (
		<div className="container relative flex-col items-center justify-center md:grid lg:max-w-none lg:px-0">
			<div className="lg:p-8">
				<div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
					<div className="flex flex-col space-y-2 text-center">
						<Text tag="h1">Trip Tempo</Text>
						<p className="text-sm text-muted-foreground">Enter your credentials to access the admin panel</p>
					</div>
					<LoginForm />
				</div>
			</div>
		</div>
	);
}
