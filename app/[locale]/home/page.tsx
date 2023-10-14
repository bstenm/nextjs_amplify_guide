import '@aws-amplify/ui-react/styles.css';

import TodoList from '@/app/features/todo-list';
import translate from '@/app/i18n';
import CoinPrice from '@/app/features/coin-price';
import ErrorBoundary from '@/app/components/error-boundary';
import TranslationsProvider from '@/app/components/translations-provider';
import ClientComponent from '@/app/components/client-component';
import LanguageSelect from '@/app/components/language-select';

type Props = {
    locale: string;
};

export default async function Home({ locale }: Props): Promise<JSX.Element> {
    const { options } = await translate(locale);

    return (
        <TranslationsProvider namespaces={options.ns} locale={locale}>
            <main className="flex min-h-screen flex-col items-center justify-around  p-24">
                <LanguageSelect />
                <ClientComponent />
                <ErrorBoundary message="Could not retrieve the  coin price">
                    <CoinPrice coinNumber={35} />
                </ErrorBoundary>
                <ErrorBoundary message="Could not retrieve the todo list">
                    <TodoList locale={locale} />
                </ErrorBoundary>
            </main>
        </TranslationsProvider>
    );
}
