'use client';

import { useRouter, usePathname } from 'next/navigation';
import { useTranslations } from 'next-intl';
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from './ui/select';
import { ONE } from '../core';

const LanguageSwitcher = (): JSX.Element => {
	const router = useRouter();
	const pathname = usePathname(); // Get the current pathname
	const translations = useTranslations('NavBar'); // Use your translation namespace

	const changeLanguage = (value: string): void => {
		// Redirect to the new locale with the current pathname
		router.push(`/${value}`);
	};

	return (
		<div>
			<Select onValueChange={changeLanguage} defaultValue={pathname.split('/')[ONE]}>
				<SelectTrigger className="w-[180px]">
					<SelectValue placeholder={translations('language')} />
				</SelectTrigger>
				<SelectContent>
					<SelectGroup>
						<SelectLabel>{translations('language')}</SelectLabel>
						<SelectItem value="en">English</SelectItem>
						<SelectItem value="es">Español</SelectItem>
					</SelectGroup>
				</SelectContent>
			</Select>
		</div>
	);
};

export default LanguageSwitcher;
