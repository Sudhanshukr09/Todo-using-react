import React, { useEffect, useState } from "react";
import { CiLocationArrow1 } from "react-icons/ci";
import { MdDeleteOutline } from "react-icons/md";
import { MdOutlineDone } from "react-icons/md";

const getLocalStorage = () => {
  let task = localStorage.getItem("task");
  if (task) {
    return (task = JSON.parse(localStorage.getItem("task")));
  } else {
    return [];
  }
};
const Right = () => {
  let [Text, setText] = useState();
  let [task, settask] = useState(getLocalStorage());

  const handleAdd = () => {
    settask([...task, Text]);
    setText("");
  };

  useEffect(() => {
    localStorage.setItem("task", JSON.stringify(task));
  }, [task]);
  const Nothing = () => {
    if (task.length == 0) {
      return (
        <>
          <h2 className="mt-5">There is no task available.</h2>
        </>
      );
    }
  };

  const handleRemove = (i) => {
    let y = [...task];
    y.splice(i, 1);
    settask(y);
  };

  return (
    <>
      <div className="bg-[#FFFFFF] h-[80vh] w-[27vw] p-[1rem] xs:w-[40vh] xs:h-[50vh] rounded-lg text-center flex flex-col">
        <div>
          <h2 className="font-bold text-[2rem] my-4">
            Todo <span className="text-[1.8rem] mx-[-.8rem]">🚀</span>
          </h2>
        </div>
        <div>
          <input
            type="text"
            placeholder="write here..."
            value={Text}
            onChange={(e) => setText(e.target.value)}
            className="my-2 border-2 border-[#5252ccb7] w-full rounded-md h-9 focus:outline-none px-2"
          />
        </div>
        <div>
          <button
            disabled={!Text}
            className="bg-[#4F4FEE] text-white font-bold w-full py-1.5 rounded-lg mb-3 active:scale-[.98]"
            onClick={handleAdd}
          >
            Add
          </button>
        </div>
        <Nothing />
        <div className="hover:scrollbar-thumb-sky-500 scrollbar scrollbar-thumb-slate-700 scrollbar-track-slate-300 overflow-y-scroll">
          {task.map((elem, i) => (
            <div>
              <ul className="text-start mx-3 mt-3">
                <li key={i} className="flex items-center justify-between">
                  <div className="flex items-center text-[1.3rem]">
                    <CiLocationArrow1 className="pt-1 size-6 mr-2 cursor-pointer" />
                    {elem}
                  </div>
                  <div className="flex items-center">
                    <button>
                      <MdOutlineDone
                        onClick={() => {
                          handleRemove(i);
                        }}
                        className="pt-1 size-6 cursor-pointer"
                      />
                    </button>
                    <MdDeleteOutline
                      onClick={() => {
                        handleRemove(i);
                      }}
                      className="pt-1 size-6 mr-2 cursor-pointer active:scale-105"
                    />
                  </div>
                </li>
              </ul>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Right;
