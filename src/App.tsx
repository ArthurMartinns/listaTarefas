import * as S from './App.style';
import { FormEvent, useState } from "react";
import { IoMdClose } from "react-icons/io";
import Header from './components/Header/header';
import Container from './components/Container/container';
import ListItem from './components/ListItem/list-item';

interface Task {
  id: number;
  title: string;
}

function App() {
  const [tarefa, setTarefa] = useState('');
  const [tasks, setTasks] = useState<Task[]>([]);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (tarefa.trim() === '') return; 

    const newTask: Task = {
      id: Date.now(),
      title: tarefa.trim(),
    };

    setTasks((prevTasks) => [...prevTasks, newTask]);
    setTarefa('');
  };

  const onDelete = (id: number) => {
    setTasks((prevTasks) => prevTasks.filter(task => task.id !== id));
  };

  return (
    <S.Container>
      <Header />
      <Container>
        <S.Nav>
          <form onSubmit={onSubmit}>
            <S.input
              type="text"
              value={tarefa}
              onChange={e => setTarefa(e.target.value)}
              placeholder="Digite uma tarefa"
            />
            <S.plus type="submit">
              Adicionar tarefa
            </S.plus>
          </form>
        </S.Nav>
        <S.Lista>
          {tasks.map((task) => (
            <ListItem key={task.id}>
              <li>{task.title}</li>
              <IoMdClose onClick={() => onDelete(task.id)} cursor="pointer" />
            </ListItem>
          ))}
        </S.Lista>
      </Container>
    </S.Container>
  );
}

export default App;
