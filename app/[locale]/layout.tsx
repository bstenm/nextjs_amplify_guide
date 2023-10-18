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
            <head>
                <meta name="application-name" content="PWA App" />
                <meta name="apple-mobile-web-app-capable" content="yes" />
                <meta
                    name="apple-mobile-web-app-status-bar-style"
                    content="default"
                />
                <meta name="apple-mobile-web-app-title" content="PWA App" />
                <meta name="description" content="Best PWA App in the world" />
                <meta name="format-detection" content="telephone=no" />
                <meta name="mobile-web-app-capable" content="yes" />
                <meta
                    name="msapplication-config"
                    content="/browserconfig.xml"
                />
                <meta name="msapplication-TileColor" content="#2B5797" />
                <meta name="msapplication-tap-highlight" content="no" />
                <meta name="theme-color" content="#000000" />
                <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
                <link
                    rel="apple-touch-icon"
                    sizes="152x152"
                    href="/apple-touch-icon.png"
                />
                <link
                    rel="apple-touch-icon"
                    sizes="180x180"
                    href="/apple-touch-icon.png"
                />
                <link
                    rel="apple-touch-icon"
                    sizes="167x167"
                    href="/apple-touch-icon.png"
                />
                <link
                    rel="icon"
                    type="image/png"
                    sizes="32x32"
                    href="/favicon-32x32.png"
                />
                <link
                    rel="icon"
                    type="image/png"
                    sizes="16x16"
                    href="/favicon-16x16.png"
                />
                <link rel="manifest" href="/manifest.json" />
                <link rel="shortcut icon" href="/favicon.ico" />
                <meta property="og:type" content="website" />
                <meta property="og:title" content="PWA App" />
                <meta
                    property="og:description"
                    content="Best PWA App in the world"
                />
                <meta property="og:site_name" content="PWA App" />
            </head>
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
