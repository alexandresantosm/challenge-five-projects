
import { useTodo } from '../../hooks/UseTodo';

import { Container, Content } from './style';

export const ListItem = () => {
    const { itens } = useTodo();

    return (
        <Container>
            {itens.map((item, index) => (
                <Content key={`item_${item.id}`}>
                    <input type="checkbox" name={`input_checked_${item.id}`} id={`input_checked_${item.id}`} />
                    <label>{item.name}</label>
                </Content>
            ))}
        </Container>
    );
}
