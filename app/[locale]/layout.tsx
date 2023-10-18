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
    manifest: '/manifest.json',
    description: 'Showcase a Nextjs app with an Amplify backend',
    themeColor: '#000000',
    icons: {
        apple: '/apple-touch-icon.png',
        icon: [
            {
                url: '/favicon-16x16.png',
                type: 'image/png',
                sizes: '16x16'
            },
            {
                url: '/favicon-32x32.png',
                type: 'image/png',
                sizes: '32x32'
            },
            {
                url: '/android-chrome-192x192.png',
                type: 'image/png',
                sizes: '192x192'
            },
            {
                url: '/android-chrome-512x512.png',
                type: 'image/png',
                sizes: '512x512'
            }
        ]
    }
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
