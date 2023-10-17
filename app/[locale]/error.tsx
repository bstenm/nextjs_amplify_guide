'use client';

import { useEffect } from 'react';

export default function Error({
    error,
    reset
}: {
    error: Error & { digest?: string };
    reset: () => void;
}): JSX.Element {
    useEffect(() => {
        // TODO: Log the error to an error reporting service
    }, [error]);

    return (
        <div className="centered h-screen w-screen">
            <div className="text-center">
                <h2>Something went wrong!</h2>
                <button
                    className="mt-6 rounded-sm border border-gray-400 p-2"
                    type="button"
                    onClick={
                        // Attempt to recover by trying to re-render the segment
                        () => reset()
                    }>
                    Try again
                </button>
            </div>
        </div>
    );
}
