import React from 'react';
import { capitalize } from 'lodash';

import translate from '@/app/i18n';
import { ErrorBoundary as ReactErrorBoundary } from 'react-error-boundary';

type Props = {
    locale: string;
    children: React.ReactNode;
    messageId: string;
};

export function ErrorMessage({ content }: { content: string }): JSX.Element {
    return (
        <div className="flex flex-col items-center gap-2 text-purple-300">
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
            fallback={
                <ErrorMessage
                    content={`${capitalize(t('error'))}: ${capitalize(
                        t(messageId)
                    )}`}
                />
            }>
            {children}
        </ReactErrorBoundary>
    );
}
