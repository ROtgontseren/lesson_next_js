import React from 'react';

const Word = ({word}) => {
  return (
    <div>
      <div className="border flex flex-col rounded-2xl ">
              <img className=" rounded-t-2xl" src={word.cover_image} />
              <div>
                <span>{word?.type_of}</span>
                <h2>{word.title}</h2>
              </div>
            <div className="flex p-4">
              <img
                 className="h-[100px] w-[100px] rounded-full"
                 src={word.user.profile_image}
                 />
           <p className="flex flex-col justify-center ml-4">{word.user.name}</p>
            </div>
            </div>
    </div>
  )
}

export default Word;
