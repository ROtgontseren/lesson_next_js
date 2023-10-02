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
      <div className="grid justify-center">
        <div className="grid grid-cols-2 gap-4">
              {words.map((word, i) => {
               return  <div className="w-[680px] h-[450px] m-auto">
                     <div className= "gap-6 mt-6">
                       <img src={word.cover_image} />
                       <div>
                         <span>{word?.type_of}</span>
                         <h2>{word.title}</h2>
                       </div>
                     </div>
             </div>
               })}
          <div className="w-[780px] h-[450px] m-auto">
            <div className="">
                {words.map((word, i) => {
                return <Word word={word}/>
                 })}
            </div>
            <div className="mt-12">
                {words.map((word, i) => {
                return <Word word={word}/>
                })}
            </div>
          </div>
        </div>
      <div>
          {words.map((word, i) => {
           return  <div className="w-[1450px] h-[200px] m-auto mt-24">
           <div className= "gap-6 mt-6 flex">
             <img className="w-[592px] h-[150px]"  src={word.cover_image} />
             <div>
               <span>{word?.type_of}</span>
               <h2>{word.title}</h2>
             </div>
           </div>
           </div>
          })}</div>
      </div>
    </div>
  );
// };
};

export default Container;
