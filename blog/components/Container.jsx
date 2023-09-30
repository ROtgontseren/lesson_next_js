import React from "react";
import Card from "./Card";
import { useState, useEffect } from 'react';
import Word from "./Word";

const Container = () => {
  const [words,setWords]= useState([]);  
     useEffect(() => {
        fetchData();
  }, [])
 const fetchData = async () => {
     const res = await fetch("https://dev.to/api/articles?per_page=1");
     const data = await res.json();
     setWords(data);
     }   
  return (
    <div>
      <h2>Recent blog posts</h2>
      <div className="">
        <div className="grid grid-cols-2 gap-4 h-[1216px]">
              {words.map((word, i) => {
               return <Word word={word}/>
               })}
          <div className="">
            <div>
                {words.map((word, i) => {
                return <Word word={word}/>
                 })}
            </div>
            <div>
                {words.map((word, i) => {
                return <Word word={word}/>
                })}
            </div>
          </div>
        </div>
      <div>
          {words.map((word, i) => {
           return <Word word={word}/>
          })}</div>
      </div>
    </div>
  );
// };
};

export default Container;
