
import { Item } from '../App';

type CompleteStateProps = {
    todoList:Item[];
    getBackToProcess:(id:number) => Item[];
  }
  

const CompleteState = ({todoList,getBackToProcess}:CompleteStateProps) => {
  return (
    <div className="w-[300px] h-[350px] border border-black m-10">
      <div className="p-1">
        <h2 className="text-center border border-black p-2 text-base font-bold">
          Complete List
        </h2>
      </div>

      {todoList.map((singleObj,i) => {
        return (
          <div key={i} className="h-10 flex justify-between text-center border border-black p-2 text-base font-bold m-1">
            <button onClick={() => getBackToProcess(singleObj.id)} className="border border-black">+</button>
            <h3>{singleObj.todo}</h3>
          </div>
        );
      })}
    </div>
  )
}

export default CompleteState