import Loader from '@/components/loader';

export default function Loading(): JSX.Element {
    return (
        <div className="centered h-screen w-screen">
            <Loader />
        </div>
    );
}
