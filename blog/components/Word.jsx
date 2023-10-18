import React from "react";
import Link from "next/link";

const Word = ({ word }) => {
  return (
    <>
      <Link href={"/blog/" + word.id}>
        <div className="flex h-[180px] mt-6">
          <img className="rounded-xl" src={word.social_image} />
          <div className="p-6">
            <span className="font-bold text-xl">{word?.type_of}</span>
            <h2>{word.title}</h2>
          </div>
        </div>
      </Link>
    </>
  );
};

export default Word;
