import React from 'react';

import translate from '@/app/i18n';
import { ErrorBoundary as ReactErrorBoundary } from 'react-error-boundary';

type Props = {
    locale: string;
    children: React.ReactNode;
    messageId: string;
};

export async function ErrorMessage({
    locale,
    content
}: {
    locale: string;
    content: string;
}): Promise<JSX.Element> {
    const { t } = await translate(locale as string);

    return (
        <div className="flex flex-col items-center gap-2 text-purple-300">
            <p>{t('unexpectedError')}:</p>
            <p>{content}</p>
        </div>
    );
}

export default async function ErrorBoundary({
    locale,
    children,
    messageId
}: Props): Promise<JSX.Element> {
    const { t } = await translate(locale as string);

    return (
        <ReactErrorBoundary
            fallback={<ErrorMessage locale={locale} content={t(messageId)} />}>
            {children}
        </ReactErrorBoundary>
    );
}
