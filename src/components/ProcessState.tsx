import React from "react";
import { Item } from "../App";

type ProcessStateProps = {
  todoList:Item[];
  completeState:(id:Number) => void;
}

const ProcessState = ({todoList,completeState}:ProcessStateProps) => {
  return (
    <div className="w-[300px] h-[350px] border border-black m-10">
      <div className="p-1">
        <h2 className="text-center border border-black p-2 text-base font-bold">
          Todo List
        </h2>
      </div>

      {todoList.map((singleObj,i) => {
        return (
          <div key={i} className="h-10 flex justify-between text-center border border-black p-2 text-base font-bold m-1">
            <p className="border border-black">+</p>
            <h3>{singleObj.todo}</h3>
            <button onClick={() => completeState(singleObj.id)} className="border border-black">+</button>
          </div>
        );
      })}

    </div>
  );
};

export default ProcessState;
