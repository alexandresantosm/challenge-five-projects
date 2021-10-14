import { useTodo } from '../../../hooks/UseTodo';
import { Container } from './style';

interface InputItemProps {
    id: number;
    checked: boolean;
}

export const InputItem = ({id, checked}: InputItemProps) => {
    const { updateDone } = useTodo();

    const handleChangeChecked = (id: number) => {
        updateDone(id);
    }
    return (
        <Container
            type="checkbox"
            name={`input_checked_${id}`}
            id={`input_checked_${id}`}
            checked={checked}
            onChange={() => handleChangeChecked(id)}
        />
    );
}