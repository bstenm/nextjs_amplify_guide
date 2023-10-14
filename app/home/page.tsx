import '@aws-amplify/ui-react/styles.css';

import TodoList from '@/app/features/todo-list';
import CoinPrice from '@/app/features/coin-price';
import ErrorBoundary from '@/app/components/error-boundary';

export default async function Home(): Promise<JSX.Element> {
    return (
        <main className="flex min-h-screen flex-col items-center justify-around  p-24">
            <ErrorBoundary message="Could not retrieve the  coin price">
                <CoinPrice coinNumber={35} />
            </ErrorBoundary>
            <ErrorBoundary message="Could not retrieve the todo list">
                <TodoList />
            </ErrorBoundary>
        </main>
    );
}
