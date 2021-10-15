import { ChangeEvent, KeyboardEvent,useState } from 'react';
import { useTodo } from '../../../hooks/UseTodo';

import { createId } from '../../../utils/IdGenerator'

import { Container } from './style';

export const NewItem = () => {
    const { items, addItem } = useTodo();
    const initialState = '';
    const [taskName, setTaskName] = useState(initialState);

    const handleChangeTaskName = (event: ChangeEvent<HTMLInputElement>) => {
        const newTask = event.target.value;

        setTaskName(newTask);
    }

    const addNewItem = (event: KeyboardEvent) => {
        const isNameValid = taskName !== '';
        const isPressEnter = event.code === 'Enter';

        if (isPressEnter && isNameValid) {
            const id = createId(items);
            const name = taskName;
            const done = false;

            const newItem = {
                id,
                name,
                done
            }

            addItem(newItem);

            setTaskName(initialState);
        }
    }

    return (
        <Container
            type="text"
            placeholder="Adicione uma tarefa"
            value={taskName}
            onChange={(event) => handleChangeTaskName(event)}
            onKeyUp={(event) => addNewItem(event)}
        />
    );
}