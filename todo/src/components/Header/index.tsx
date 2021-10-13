import { ReactNode } from 'react';

import { Container, Content } from './style';

interface HeaderProps {
    title: ReactNode;
}

export const Header = ({ title }: HeaderProps) => {
    return (
        <Container>
            <Content>
                {title}
            </Content>
        </Container>
    );
}