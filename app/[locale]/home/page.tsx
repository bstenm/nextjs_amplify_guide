import '@aws-amplify/ui-react/styles.css';

import TodoList from '@/features/todo-list';
import translate from '@/app/i18n';
import CoinPrice from '@/features/coin-price';
import TodayDate from '@/components/today-date';
import AsyncAction from '@/components/async-action';
import { MenuSidebar } from '@/components/sidebar-menu';
import LanguageSelect from '@/components/language-select';
import TranslationsProvider from '@/components/translations-provider';

type Props = {
    locale: string;
};

export default async function Home({ locale }: Props): Promise<JSX.Element> {
    const { options } = await translate(locale);

    return (
        <TranslationsProvider namespaces={options.ns} locale={locale}>
            <main className="flex min-h-screen flex-col items-center justify-around  p-24">
                <LanguageSelect />
                <TodayDate locale={locale} />
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
