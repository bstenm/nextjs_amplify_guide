import { initReactI18next } from 'react-i18next/initReactI18next';
import resourcesToBackend from 'i18next-resources-to-backend';
import { createInstance, i18n } from 'i18next';

import i18nConfig from '@/i18n-config';
import { debug, isDev } from '@/config';

export default async function initTranslations(
    locale: string,
    namespaces: readonly string[] | string = ['default']
): Promise<i18n> {
    const i18nInstance = createInstance();

    await i18nInstance
        .use(initReactI18next)
        .use(
            resourcesToBackend(
                (language: string, namespace: string) =>
                    import(`locales/${language}/${namespace}.json`)
            )
        )
        .init({
            lng: locale,
            fallbackLng: i18nConfig.defaultLocale,
            supportedLngs: i18nConfig.locales,
            defaultNS: namespaces[0],
            fallbackNS: namespaces[0],
            ns: namespaces,
            preload: typeof window === 'undefined' ? i18nConfig.locales : [],
            debug: isDev && debug
        });

    return i18nInstance;
}
