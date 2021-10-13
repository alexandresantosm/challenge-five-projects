import { Header } from "./components/Header";
import { Main } from "./components/Main";
import { Wrapper } from "./components/Wrapper";
import { useTodo } from "./hooks/UseTodo";

const App = () => {
  const { itens } = useTodo();

  return (
    <Wrapper>
      <Main>
        <Header title={'Lista de Tarefas'} />

        {itens.map((item, index) => (
          <div key={`item_${item.id}`}>{item.name}</div>
        ))}

      </Main>
    </Wrapper>
  );
}

export default App;
