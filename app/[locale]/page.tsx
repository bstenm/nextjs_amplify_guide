import '@aws-amplify/ui-react/styles.css';

import Home from './home/page';

type Props = {
    params: {
        locale: string;
    };
};

export default async function Root({
    params: { locale }
}: Props): Promise<JSX.Element> {
    return <Home locale={locale} />;
}
