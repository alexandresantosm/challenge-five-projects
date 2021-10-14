import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

interface ContentPorps {
  done: boolean;
}

export const Content = styled.div(({ done }: ContentPorps) => (`
  display: flex;
  padding: 0.75rem;
  border-radius: 0.75rem;
  margin-bottom: 0.75rem;
  background-color: #20212c;
  align-itens: center;

  input {
      width: 1.5rem;
      height: 1.5rem;
      margin-right: 0.5rem;
  }

  label {
      color: #ccc;
      text-decoration: ${done ? 'line-through' : 'initial'};
  }
`));
