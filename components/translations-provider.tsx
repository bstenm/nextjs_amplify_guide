'use client';

import { i18n as I18n } from 'i18next';
import { I18nextProvider } from 'react-i18next';
import { useEffect, useState } from 'react';

import translate from '@/app/i18n';

let i18n: I18n;

type Props = {
    locale: string;
    children: React.ReactNode;
    namespaces?: readonly string[] | string;
};

export default function TranslationsProvider({
    locale,
    children,
    namespaces
}: Props): JSX.Element {
    const [instance, setInstance] = useState(i18n);

    useEffect(() => {
        const init = async (): Promise<void> => {
            if (!i18n) {
                const newInstance = await translate(locale, namespaces);
                i18n = newInstance;
                setInstance(newInstance);
            } else if (i18n.language !== locale) {
                i18n.changeLanguage(locale);
            }
        };

        init();
    }, [locale, namespaces]);

    if (!instance) {
        return <div />;
    }

    return (
        <I18nextProvider
            i18n={instance}
            defaultNS={namespaces && namespaces[0]}>
            {children}
        </I18nextProvider>
    );
}
