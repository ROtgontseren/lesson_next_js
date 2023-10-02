import React from "react";

const Word = ({ word }) => {
  return (
    <>
      <div className="flex h-[180px] mt-6">
        <img className="rounded-xl" src={word.cover_image} />
        <div className="p-6">
          <span className="font-bold text-xl">{word?.type_of}</span>
          <h2>{word.title}</h2>
        </div>
      </div>
    </>
  );
};

export default Word;
