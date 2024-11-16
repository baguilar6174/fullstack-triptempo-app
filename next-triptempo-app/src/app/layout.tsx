import './globals.css';
import type { Metadata } from 'next';
import { Noto_Sans_Display } from 'next/font/google';

import { Navbar } from '@/components/Navbar';
import { Toaster } from '@/components/ui/toaster';
import { ThemeProvider } from '@/components/ThemeProvider';

const noto = Noto_Sans_Display({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: 'Trip Tempo',
	description: 'Find the perfect schedule for your trip in Ecuador!'
};

export default function RootLayout({ children }: { children: React.ReactNode }): JSX.Element {
	return (
		<html lang="en" suppressHydrationWarning>
			<body className={`${noto.className} w-full `}>
				<ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
					<Navbar />
					<main className="pt-[60.8px]">{children}</main>
					<Toaster />
				</ThemeProvider>
			</body>
		</html>
	);
}
