import { Header } from "./components/Header";
import { ListItem } from "./components/ListItem";
import { Main } from "./components/Main";
import { Wrapper } from "./components/Wrapper";

const App = () => {
  return (
    <Wrapper>
      <Main>
        <Header title={'Lista de Tarefas'} />

        <ListItem />

      </Main>
    </Wrapper>
  );
}

export default App;
