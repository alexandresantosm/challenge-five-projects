import { createContext, ReactNode, useState } from 'react';

type Item = {
    id: number;
    name: string;
    done: boolean;
}

type TodoContextData = {
    itens: Array<Item>;
}

export const TodoContext = createContext({} as TodoContextData);

interface TodoProviderProps {
    children: ReactNode;
}

export const TodoProvider = ({children}: TodoProviderProps) => {
    const initialState = [
        {id: 1, name: 'Comprar pão na padaria', done: false },
        {id: 2, name: 'Estudar React', done: true },
    ];

    const [itens, setItens] = useState(initialState);

    return (
        <TodoContext.Provider value={{ itens }}>
            {children}
        </TodoContext.Provider>
    );
}
