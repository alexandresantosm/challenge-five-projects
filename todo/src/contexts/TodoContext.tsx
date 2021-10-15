import { createContext, ReactNode, useState } from 'react';

type Item = {
    id: number;
    name: string;
    done: boolean;
}

type TodoContextData = {
    items: Array<Item>;
    updateDone: (id: number) => void;
    addItem: (item: Item) => void;
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

    const [items, setItems] = useState(initialState);

    const updateDone = (id: number) => {
        const itemsUpdate = items.map((item) => {
            const {id: idItem} = item;
            
            if (idItem === id) {
                item.done = !item.done;
                return item;
            }

            return item;
        });

        setItems(itemsUpdate);
    }

    const addItem = (item: Item) => {
        setItems([...items, item]);
    }

    return (
        <TodoContext.Provider value={{ items, updateDone, addItem }}>
            {children}
        </TodoContext.Provider>
    );
}
