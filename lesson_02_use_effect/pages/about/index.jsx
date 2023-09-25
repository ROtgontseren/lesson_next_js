import React, { useState } from "react";

const about = () => {
  const [count, setCount] = useState(0);

  const add = () => {
    setCount(count + 1);
    console.log("add =", count);
  };
  const sub = () => {
    setCount(count - 1);
    console.log("sub =", count);
  };
  return (
    <div className="flex justify-center mt-12">
      <div className="w-72 h-52 rounded-3xl bg-cyan-200">
        <h1 className="text-4xl font-bold text-violet-800 text-center mt-4">
          ABOUT PAGE
        </h1>
        <div className="text-center my-6 text-violet-600 font-bold">
          counter:{count}
        </div>
        <div className="flex justify-center">
          <button
            className="mx-6 my-3 bg-green-400 px-6 py-3 rounded-2xl text-white hover:scale-110 hover:bg-green-700"
            onClick={add}
          >
            нэмэх
          </button>
          <button
            className="mx-6 my-3 bg-red-400 px-6 py-3 rounded-2xl text-white hover:scale-110 hover:bg-red-700"
            onClick={sub}
          >
            хасах
          </button>
        </div>
      </div>
    </div>
  );
};

export default about;
