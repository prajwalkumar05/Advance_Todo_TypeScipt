import React, { useState } from "react";
import CurrentTime from "./CurrentTime";
import { Item } from "../App";

type MyComponentProps = {
  getTodo: (Item:Object) => void;
};

const AddTodoList = ({ getTodo }: MyComponentProps) => {
  const [todoText, setTodoText] = useState<string>("");
  // const [todo, setTodo] = useState<Item | null>();

  const handleSubmit = () => {
    const newTodo: Item = {
      id: Math.floor(Math.random() * 10000), // Generate a random id
      todo: todoText,
      date: new Date(), // Set the current date
    };
    getTodo(newTodo);
  };

  return (
    <div className="h-[250px] w-[80%] border border-black mt-10 mx-auto flex justify-center flex-col items-center">
      <CurrentTime />

      <div className="w-[50%] h-12 flex">
        <input
          onChange={(e) => {setTodoText(e.target.value)}}
          className="border border-black w-[100%] h-10"
          type="text"
          name=""
          id=""
        />
        <button
          onClick={handleSubmit}
          className="border border-black w-10 h-10"
        >
          +
        </button>
      </div>
    </div>
  );
};

export default AddTodoList;
