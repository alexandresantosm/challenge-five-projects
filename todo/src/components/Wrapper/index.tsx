import { ReactNode } from 'react';

import { Container } from './style';

interface WrapperProps {
    children: ReactNode;
}

export const Wrapper = ({children}: WrapperProps): JSX.Element => {
    return (
        <Container>
            {children}
        </Container>
    );
}