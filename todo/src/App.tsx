import { Header } from "./components/Header";
import { Main } from "./components/Main";
import { Wrapper } from "./components/Wrapper";

const App = () => {
  return (
    <Wrapper>
      <Main>
        <Header title={'Lista de Tarefas'} />
      </Main>
    </Wrapper>
  );
}

export default App;
