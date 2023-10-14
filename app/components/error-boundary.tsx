import React from 'react';

import { ErrorBoundary as ReactErrorBoundary } from 'react-error-boundary';

type Props = {
    message: string;
    children: React.ReactNode;
};

function Message({ content }: { content: string }): JSX.Element {
    return (
        <div className="flex flex-col items-center gap-2 text-purple-300">
            <p>Something went wrong:</p>
            <p>{content}</p>
        </div>
    );
}

export default function ErrorBoundary({
    message,
    children
}: Props): JSX.Element {
    return (
        <ReactErrorBoundary fallback={<Message content={message} />}>
            {children}
        </ReactErrorBoundary>
    );
}
