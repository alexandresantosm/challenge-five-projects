import styled from 'styled-components';

interface ContainerProps {
    done: boolean;
}

export const Container = styled.label(({ done }: ContainerProps) => (`
    color: #ccc;
    text-decoration: ${done ? 'line-through' : 'initial'};
`));
