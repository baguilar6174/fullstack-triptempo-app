// src/app/[locale]/LanguageSwitcher.tsx
'use client'; // Mark this component as a Client Component

import { useRouter, usePathname } from 'next/navigation'; // Use next/navigation instead of next/router
import { useTranslations } from 'next-intl';
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from './ui/select';

const LanguageSwitcher = () => {
	const router = useRouter();
	const pathname = usePathname(); // Get the current pathname
	const translations = useTranslations('HomePage'); // Use your translation namespace

	const changeLanguage = (value: string) => {
		// Redirect to the new locale with the current pathname
		router.push(`/${value}`);
	};

	return (
		<div>
			<Select onValueChange={changeLanguage} defaultValue={pathname.split('/')[1]}>
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
