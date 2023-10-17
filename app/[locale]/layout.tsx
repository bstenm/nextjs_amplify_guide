import { dir } from 'i18next';
import { Inter } from 'next/font/google';
import awsconfig from '@/aws-exports.js';
import { Amplify } from 'aws-amplify';
import type { Metadata } from 'next';

import i18nConfig from '@/i18n-config';
import { ThemeProvider } from '@/components/theme-provider';

import '@/app/globals.css';

Amplify.configure({ ...awsconfig, ssr: true });

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
    title: 'Nextjs Amplify Guide',
    description: 'Showcase a Nextjs app with an Amplify backend'
};

export function generateStaticParams(): { locale: string }[] {
    return i18nConfig.locales.map((locale) => ({ locale }));
}

export default function RootLayout({
    children,
    params: { locale }
}: {
    children: React.ReactNode;
    params: { locale: string };
}): JSX.Element {
    return (
        <html lang={locale} dir={dir(locale)}>
            <body className={inter.className}>
                <ThemeProvider
                    attribute="class"
                    defaultTheme="dark"
                    enableSystem
                    disableTransitionOnChange>
                    {children}
                </ThemeProvider>
            </body>
        </html>
    );
}
