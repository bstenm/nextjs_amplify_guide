import '@aws-amplify/ui-react/styles.css';

import Home from './home/page';

export default async function Root(): Promise<JSX.Element> {
    return <Home />;
}
