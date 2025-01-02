import * as S from './App.style';
import { ChangeEvent, FormEvent, useState } from "react";

function App() {
  const [tarefa, setTarefa] = useState('');
  const [task, setTask] = useState<string[]>([]);

  const onTaskChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTarefa(e.target.value);
  };

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (tarefa.trim()) {
      setTask((prevTasks) => [...prevTasks, tarefa]);
      setTarefa('');
    }
  };

  return (
    <>
      <S.Container>
        <S.Header>
          <h1>Lista de Tarefas</h1>

          <form onSubmit={onSubmit}>
            <input
              type="text"
              value={tarefa}
              onChange={onTaskChange}
              placeholder="Digite uma tarefa"
            />
            <button type="submit">+</button>
          </form>
        </S.Header>
        <S.Lista>
          {task.map((tarefa, index) => (
            <li key={index}>{tarefa}</li>
          ))}
        </S.Lista>
      </S.Container>
    </>
  );
}

export default App;
