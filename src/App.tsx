import * as S from './App.style';
import { FormEvent, useState } from "react";
import { IoMdClose } from "react-icons/io";
import Header from './components/Header/header';
import Container from './components/Container/container';

function App() {
  const [tarefa, setTarefa] = useState('');
  const [task, setTask] = useState<string[]>([]);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (tarefa == '') return;

    setTask((prevTasks) => [...prevTasks, tarefa]);
    setTarefa('');

  };

  const onDelete = (index: number) => {
    const updatedTask = task.filter((_, i) => i !== index)
    setTask(updatedTask)
  }

  return (
    <>
      <S.Container>
        <Header />
        <Container>
          <S.Nav>
            <S.Form onSubmit={onSubmit}>
              <S.input
                type="text"
                value={tarefa}
                onChange={e => setTarefa(e.target.value)}
                placeholder="Digite uma tarefa"
              />
              <S.plus
                type="submit"
              >
                Adicionar tarefa
              </S.plus>
            </S.Form>
          </S.Nav>
          <S.Lista>
            {task.map((tarefa, index) => (
              <>
                <S.ListItem>
                  <li key={index}>{tarefa}</li>
                  <IoMdClose onClick={() => onDelete(index)} cursor={'pointer'} />
                </S.ListItem>
              </>
            ))}
          </S.Lista>
        </Container>
      </S.Container>
    </>
  );
}

export default App;
