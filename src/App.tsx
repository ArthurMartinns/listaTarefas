import * as S from './App.style';
import { ChangeEvent, FormEvent, useState } from "react";
import { IoMdClose } from "react-icons/io";

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

  const onDelete = (index: number) => {
    const updatedTask = task.filter((_, i) => i !== index)
    setTask(updatedTask)
  }

  return (
    <>
      <S.Container>
        <S.Header>
          <h2>Lista de Tarefas</h2>

          <form onSubmit={onSubmit}>
            <S.input
              type="text"
              value={tarefa}
              onChange={onTaskChange}
              placeholder="Digite uma tarefa"
            />
            <S.plus
              type="submit"
            >
              +
            </S.plus>
          </form>
        </S.Header>
        <S.Lista>
          {task.map((tarefa, index) => (
            <>
              <S.ListItem>
                <li key={index}>{tarefa}</li>
                <IoMdClose onClick={() => onDelete(index)} />
              </S.ListItem>
            </>
          ))}
        </S.Lista>
      </S.Container>
    </>
  );
}

export default App;
