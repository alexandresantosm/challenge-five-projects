import { useTodo } from '../../hooks/UseTodo';

import { Container, Content } from './style';

export const ListItem = () => {
    const { items, updateDone } = useTodo();

    const handleChangeChecked = (id: number) => {
        updateDone(id);
    }

    return (
        <Container>
            {items.map((item, index) => {
                const { id, name } = item;
                const isChecked = item.done;

                return (
                    <Content key={`item_${index}`} done={isChecked}>
                    <input
                        type="checkbox"
                        name={`input_checked_${index}`}
                        id={`input_checked_${index}`}
                        checked={isChecked}
                        onChange={() => handleChangeChecked(id)}
                    />
                    <label>{name}</label>
                </Content>
                );
            })}
        </Container>
    );
}
