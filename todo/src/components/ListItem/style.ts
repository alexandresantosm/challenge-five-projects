import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

interface ContentPorps {
  done: boolean;
}

export const Content = styled.div`
  display: flex;
  padding: 0.75rem;
  border-radius: 0.75rem;
  margin-bottom: 0.75rem;
  background-color: #20212c;
  align-itens: center;
`;
