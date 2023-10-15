import { Suspense } from 'react';

import Loader from '@/components/loader';
import ErrorBoundary from '@/components/error-boundary';

type Props = {
    locale: string;
    errorId: string;
    children: React.ReactNode;
};

export default async function AsyncAction({
    locale,
    errorId,
    children
}: Props): Promise<JSX.Element> {
    return (
        <ErrorBoundary locale={locale} messageId={errorId}>
            <Suspense fallback={<Loader />}>{children}</Suspense>
        </ErrorBoundary>
    );
}
