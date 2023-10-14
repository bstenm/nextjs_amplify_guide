import Link from 'next/link';

export default function NotFound(): JSX.Element {
    return (
        <div className="centered h-screen w-screen flex-col gap-6">
            <h2>Not Found</h2>
            <p>Could not find requested resource</p>
            <Link className="button" href="/">
                Return Home
            </Link>
        </div>
    );
}
