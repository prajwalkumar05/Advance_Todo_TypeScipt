import { useState } from "react";
import AddTodoList from "./components/AddTodoList";
import TodoState from "./components/TodoState";

export type Item = {
  id: number;
  todo: string;
  date: Date;
}



function App() {
  const [todoList,setTodoList] = useState<Item[]>([]);
  console.log(todoList)
  const [processList,setProcessList] = useState<Item[]>([])
  // const [complete,setComplete] = useState<String[]>([])

  const getTodo = (todo:Item) => {
    setTodoList((todos) =>{
      return [...todos,{...todo}]
    })
  }

  const getProcessState = () =>{
      
  }

  return (
    <div className="w-full">
      <AddTodoList getTodo={getTodo} />
      <TodoState todoList={todoList} />
    </div>
  );
}

export default App;
