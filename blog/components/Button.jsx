import React from "react";

const Button = () => {
  return (
    <div className="flex justify-center mb-24">
      <button
        className="border text-black border-slate-200 w-36 h-14 rounded-xl hover:bg-blue-400 hover:text-white hover:scale-105 "
        onClick={Handleclick}
      >
        Load More ...
      </button>
    </div>
  );
};

export default Button;
