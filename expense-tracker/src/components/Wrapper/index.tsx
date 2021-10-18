import { Header } from '../Header';
import { Main } from '../Main';
import { Container } from './styles';

export const Wrapper = () => {
    return (
        <Container>
            <Header />
            <Main />
        </Container>
    );
}