import React, { useState, useCallback } from "react";
import AddTodoList from "./components/AddTodoList";
import TodoState from "./components/TodoState";
import ProcessState from "./components/ProcessState";
import CompleteState from "./components/CompleteState";

export type Item = {
  id: number;
  todo: string;
  date: Date;
};

function App() {
  const [todoList, setTodoList] = useState<Item[]>([]);
  const [processList, setProcessList] = useState<Item[]>([]);
  const [complete, setComplete] = useState<Item[]>([]);

  console.log(todoList);

  const getTodo = useCallback((todo: Item) => {
    setTodoList((todos) => [...todos, { ...todo }]);
  }, []);

  const getTodoList = useCallback((id: number) => {
    const todoToAdd = processList.find((todo) => todo.id === id);
    if (todoToAdd) {
      setTodoList((todos) => [...todos, todoToAdd]);
      setProcessList((processList) => processList.filter((todo) => todo.id !== id));
    }
  }, [processList]);

  const getProcessState = useCallback((id: number) => {
    const todoToAdd = todoList.find((todo) => todo.id === id);
    if (todoToAdd) {
      setTodoList((todos) => todos.filter((todo) => todo.id !== id));
      setProcessList((processList) => [...processList, todoToAdd]);
    }
  }, [todoList]);

  const completeState = useCallback((id: number) => {
    const todoToAdd = processList.find((todo) => todo.id === id);
    if (todoToAdd) {
      setProcessList((processList) => processList.filter((todo) => todo.id !== id));
      setComplete((complete) => [...complete, todoToAdd]);
    }
  }, [processList]);

  const getBackToProcess = useCallback((id: number) => {
    const todoToAdd = complete.find((todo) => todo.id === id);
    if (todoToAdd) {
      setComplete((complete) => complete.filter((todo) => todo.id !== id));
      setProcessList((processList) => [...processList, todoToAdd]);
    }
  }, [complete]);

  return (
    <div className="w-full">
      <AddTodoList getTodo={getTodo} />
      <div className="flex justify-center">
        <TodoState todoList={todoList} getProcessState={getProcessState} />
        <ProcessState
          todoList={processList}
          getTodoList={getTodoList}
          completeState={completeState}
        />
        <CompleteState todoList={complete} getBackToProcess={getBackToProcess} />
      </div>
    </div>
  );
}

export default App;
