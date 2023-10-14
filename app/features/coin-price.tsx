import { headers } from 'next/headers';
import { Suspense } from 'react';
import { withSSRContext } from 'aws-amplify';

import Loader from '@/app/components/loader';

import '@aws-amplify/ui-react/styles.css';

type Props = {
    coinNumber: number;
};

type Coin = {
    name: string;
    symbol: string;
    price_usd: string;
};

async function getCoins(): Promise<{ coins: Coin[] }> {
    const req = {
        headers: {
            cookie: headers().get('cookie')
        }
    };

    const SSR = withSSRContext({ req });

    return SSR.API.get('cryptoapi', `/coins?limit=50`);
}

export default async function CoinPrice({
    coinNumber
}: Props): Promise<JSX.Element> {
    const { coins } = await getCoins();

    const data: Coin = coins[coinNumber];

    return (
        <Suspense fallback={<Loader />}>
            <div className="grid text-center lg:mb-0 lg:w-full lg:max-w-5xl lg:grid-cols-4 lg:text-left">
                <h2 className="mb-3 text-2xl">
                    {data.symbol}
                    <span className="inline-block px-4 transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                        -&gt;
                    </span>
                    ${data.price_usd}
                </h2>
                <p className="m-0 max-w-[30ch] text-sm opacity-50">
                    {data.name} cryptocurrency current value against the dollar.
                    {data.name} cryptocurrency current value against the dollar.
                </p>
            </div>
        </Suspense>
    );
}
