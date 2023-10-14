'use client';

import { ChangeEvent } from 'react';
import { useTranslation } from 'react-i18next';
import { useRouter, usePathname } from 'next/navigation';

import i18nConfig from '@/i18n-config';

export default function LanguageSelect(): JSX.Element {
    const { i18n } = useTranslation();
    const currentLocale = i18n.language;
    const router = useRouter();
    const currentPathname = usePathname();

    const handleChange = (e: ChangeEvent<HTMLSelectElement>): void => {
        const newLocale = e.target.value;

        // set cookie for next-i18n-router
        const days = 30;
        const date = new Date();
        date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
        const expires = `; expires=${date.toUTCString()}`;
        document.cookie = `NEXT_LOCALE=${newLocale};expires=${expires};path=/`;

        // redirect to the new locale path
        if (
            currentLocale === i18nConfig.defaultLocale &&
            !i18nConfig.prefixDefault
        ) {
            router.push(`/${newLocale}${currentPathname}`);
        } else {
            router.push(
                currentPathname.replace(`/${currentLocale}`, `/${newLocale}`)
            );
        }

        router.refresh();
    };

    return (
        <select
            className="bg-black"
            onChange={handleChange}
            value={currentLocale}>
            <option value="en">English</option>
            <option value="zh">Chinese</option>
            <option value="es">Spanish</option>
        </select>
    );
}
