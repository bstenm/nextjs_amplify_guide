import { API } from 'aws-amplify';
import compact from 'lodash/compact';
import { GraphQLResult } from '@aws-amplify/api';

import { listTodos } from '@/graphql/queries';
import { ListTodosQuery, Todo } from '@/_API';

import '@aws-amplify/ui-react/styles.css';

async function fetchTodos(): Promise<Todo[]> {
    const todos = (await API.graphql({
        query: listTodos
    })) as GraphQLResult<ListTodosQuery>;

    const { items } = todos?.data?.listTodos ?? {};

    return items ? compact(items) : [];
}

export default async function TodoList(): Promise<JSX.Element> {
    const todos = await fetchTodos();

    return (
        <div className="grid text-center lg:mb-0 lg:w-full lg:max-w-5xl lg:grid-cols-4 lg:text-left">
            <ul className="list-decimal">
                {todos.map((todo: Todo) => (
                    <li key={todo.id}>
                        {todo.name}
                        <p className="opacity-50">{todo.description}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}
