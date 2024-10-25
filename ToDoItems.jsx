import React from "react";
import { SiTicktick } from "react-icons/si";
import { RiDeleteBin6Line } from "react-icons/ri";

const ToDoItems = ({ text,id,dlete}) => {
   return (
    <>
      <div className="flex justify-between    gap-5 items-center my-3 bg-zinc-300 rounded-md p-2 overflow-hidden ">
        <div className="flex items-center gap-3 overflow-hidden">
          <div className="text-2xl text-green-600">
            <SiTicktick />
          </div>
          <div className=" overflow-hidden p-2 font-semibold">{text}</div>
        </div>
        <div className="text-2xl text-red-600">
          <RiDeleteBin6Line onClick={()=>{dlete(id)}}/>
        </div>
      </div>
    </>
  );
};

export default ToDoItems;
