import React from "react";
import Card from "./Card";
import { useState, useEffect } from "react";
import Word from "./Word";
import Link from "next/link";

const Container = () => {
  const [words, setWords] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    const res = await fetch("https://dev.to/api/articles?per_page=1");
    const data = await res.json();
    setWords(data);
  };
  return (
    <div>
      <h2 className="font-bold text-2xl">Recent blog posts</h2>
      <div className="max-sm:w-screen flex flex-col 2xl:w-[2000px] justify-center">
        <div className="sm:w-3/4 2xl:flex gap-4">
          {words.map((word, i) => {
            return (
              <Link href={"/blog/" + word.id} className="w-2/4">
                <div className=" w-2/4 m-auto">
                  <div className="gap-6 mt-6">
                    <img className="rounded-xl" src={word.social_image} />
                    <div className="p-6">
                      <span className="font-bold text-xl">{word?.type_of}</span>
                      <h2>{word.title}</h2>
                    </div>
                  </div>
                </div>
              </Link>
            );
          })}
          <div className="w-2/4 h-[450px] m-auto">
            <div className="">
              {words.map((word, i) => {
                return <Word key={i} word={word} />;
              })}
            </div>
            <div className="mt-12">
              {words.map((word, i) => {
                return <Word key={i} word={word} />;
              })}
            </div>
          </div>
        </div>
        <div className="sm:w-3/4 justify-center 2xl:justify-start">
          {words.map((word, i) => {
            return (
              <Link
                href={"/blog/" + word.id}
                className="sm:flex justify-end 2xl:justify-evenly"
              >
                <div className="w-3/4 my-12">
                  <div className="sm:grid grid-cols-2 mx-auto lg:grid-cols-2 2xl:mt-6 flex">
                    <img
                      className="w-[100%] h-[246px] rounded-xl"
                      src={word.social_image}
                    />
                    <div className="p-6">
                      <span className="font-bold text-xl">{word?.type_of}</span>
                      <h2>{word.title}</h2>
                    </div>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Container;
