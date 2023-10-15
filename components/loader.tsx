import Image from 'next/image';

import loaderIcon from '@/public/loader.svg';

export default function Loader(): JSX.Element {
    return (
        <div>
            <Image
                priority
                alt="Loading..."
                src={loaderIcon}
                className="mr-2 h-5 w-5 animate-spin"
            />
        </div>
    );
}
