import '@aws-amplify/ui-react/styles.css';

import TodoList from '@/app/features/todo-list';
import translate from '@/app/i18n';
import CoinPrice from '@/app/features/coin-price';
import { MenuSidebar } from '@/components/sidebar-menu';
import LanguageSelect from '@/components/language-select';
import ClientComponent from '@/components/client-component';
import TranslationsProvider from '@/components/translations-provider';
import AsyncAction from '@/components/AsyncAction';

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
                <AsyncAction locale={locale} errorId="errorFetchingCoinPrice">
                    <CoinPrice coinNumber={35} />
                </AsyncAction>
                <AsyncAction locale={locale} errorId="errorFetchingTodoList">
                    <TodoList />
                </AsyncAction>
                <MenuSidebar />
            </main>
        </TranslationsProvider>
    );
}
