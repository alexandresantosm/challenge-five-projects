import { useTodo } from '../../hooks/UseTodo';
import { InputItem } from './InputItem';
import { ItemName } from './ItemName';

import { Container, Content } from './style';

export const ListItem = () => {
    const { items } = useTodo();


    return (
        <Container>
            {items.map((item) => {
                const { id, name } = item;
                const isChecked = item.done;

                return (
                    <Content key={`item_${id}`}>
                        <InputItem id={id} checked={isChecked} />
                        <ItemName name={name} isDone={isChecked} />
                </Content>
                );
            })}
        </Container>
    );
}
