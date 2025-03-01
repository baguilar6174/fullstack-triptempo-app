import './globals.css';
import type { Metadata } from 'next';
import { Noto_Sans_Display } from 'next/font/google';
import { NextIntlClientProvider } from 'next-intl';
import { Navbar } from '@/components/Navbar';
import { Toaster } from '@/components/ui/toaster';
import { ThemeProvider } from '@/components/ThemeProvider';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';
import { getMessages } from 'next-intl/server';

const noto = Noto_Sans_Display({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: 'Trip Tempo',
	description: 'Find the perfect schedule for your trip in Ecuador!'
};

export default async function RootLayout({
	children,
	params
}: {
	children: React.ReactNode;
	params: Promise<{ locale: string }>;
}): Promise<JSX.Element> {
	// Ensure that the incoming `locale` is valid
	const { locale } = await params;
	if (!routing.locales.includes(locale as any)) {
		notFound();
	}

	// Providing all messages to the client
	// side is the easiest way to get started
	const messages = await getMessages();

	return (
		<html lang={locale} suppressHydrationWarning>
			<body className={`${noto.className} w-full `}>
				<NextIntlClientProvider locale={locale} messages={messages}>
					<ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
						<Navbar />
						<main className="pt-[60.8px]">{children}</main>
						<Toaster />
					</ThemeProvider>
				</NextIntlClientProvider>
			</body>
		</html>
	);
}
