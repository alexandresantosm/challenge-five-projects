import { Container} from './style';

interface ItemNameProps {
    name: string;
    isDone: boolean;
}

export const ItemName = ({name, isDone}: ItemNameProps) => {
    return (
        <Container done={isDone}>
            {name}
        </Container>
    );
}