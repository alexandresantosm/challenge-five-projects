import { NewItem } from './NewItem';
import { PlusImage } from './PlusImage';
import { Container } from './style';

export const AddItem = () => {
    return (
        <Container>
            <PlusImage />
            <NewItem />
        </Container>
    );
}