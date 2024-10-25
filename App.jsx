import React, { useRef, useState } from "react";
import { BsJournalPlus } from "react-icons/bs";
import ToDoItems from "./components/ToDoItems";

const App = () => {
  const [list, setList] = useState([]);

  const inputRef = useRef();
  const add = () => {
    const inputText = inputRef.current.value.trim();
    if (inputText === "") {
      return null;
    }
    const newTodo = {
      id: Date.now(),
      text: inputText,
      isComplete: false,
    };
    setList((prev) => [...prev, newTodo]);
    inputRef.current.value = "";
  };
  const dlete = (id) => {
    setList((prev) => {
      return prev.filter((todo) => todo.id !== id);
    });
  };
  return (
    <>
      <div className="bg-stone-400 flex justify-center h-screen">
        <div className="bg-zinc-200 place-self-center w-11/12 max-w-md flex flex-col  p-7 min-h-[550px] rounded-xl  ">
          <div className="flex items-center mt-7 gap-2">
            <h1 className="text-3xl">
              <BsJournalPlus />
            </h1>
            <h1 className="text-2xl font-semibold ">To-Do-List</h1>
          </div>
          <div className="bg-gray-300 rounded-full mt-7 ">
            <input
              ref={inputRef}
              className=" h-12 pl-3 pr-2 placeholder:text-slate-600 rounded-full bg-transparent outline-none border-0 flex-1"
              type="text"
              placeholder="Add Your Task..."
            />
            <button
              onClick={add}
              className="border-none rounded-full bg-orange-500 ml-14 w-32 h-12 text-white text-lg font-medium cursor-pointer "
            >
              Add+
            </button>
          </div>
          <div>
            {list.map((item, index) => {
              return (
                <ToDoItems
                  key={index}
                  text={item.text}
                  id={item.id}
                  dlete={dlete}
                />
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
