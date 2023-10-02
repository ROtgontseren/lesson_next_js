import React from 'react';

const Word = ({word}) => {
  return (
    <>
      <div className='flex w-[592px] h-[200px] gap-6 mt-6'>
              <img src={word.cover_image} />
              <div>
                <span>{word?.type_of}</span>
                <h2>{word.title}</h2>
              </div>
            </div>
    </>
  )
}

export default Word;
