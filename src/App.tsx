import { useState } from "react";
import AddTodoList from "./components/AddTodoList";
import TodoState from "./components/TodoState";
import ProcessState from "./components/ProcessState";

export type Item = {
  id: number;
  todo: string;
  date: Date;
};

function App() {
  const [todoList, setTodoList] = useState<Item[]>([]);
  const [processList, setProcessList] = useState<Item[]>([]);
  const [complete, setComplete] = useState<Item[]>([]);

  console.log(complete);

  const getTodo = (todo: Item) => {
    setTodoList((todos) => {
      return [...todos, { ...todo }];
    });
  };

  const getProcessState = (id:Number) => {
    console.log(id);

    const filterForTodolist = todoList.filter((todo) => todo.id !== id);

    //update todolist
    setTodoList([...filterForTodolist]);

    const filterForProcessList = todoList.filter((todo) => todo.id === id);
    setProcessList((todos) => {
      return [...todos, ...filterForProcessList];
    });
    // setProcessList(filterForProcessList)
    // setTodos(todos.filter(todo => todo.id !== id));
  };


  const completeState = (id:Number) => {
    console.log(id);

    const filterForCompleteList = processList.filter((todo) => todo.id === id);

    setComplete((todos) => {
      return [...todos, ...filterForCompleteList];
    });
  };
  console.log(complete);

  return (
    <div className="w-full">
      <AddTodoList getTodo={getTodo} />
      <div className="flex justify-center">
        <TodoState todoList={todoList} getProcessState={getProcessState} />
        <ProcessState todoList={processList} completeState={completeState} />
      </div>
    </div>
  );
}

export default App;
