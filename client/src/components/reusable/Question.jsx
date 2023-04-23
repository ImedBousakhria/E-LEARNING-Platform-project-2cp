import React from 'react'

const Question = ({index, handleClick}) => {
  return (
    <button onClick={handleClick} className='text-black  w-fit  rounded-[17px] bg-lightgray p-1 font-thin'>
      Question {index}
    </button>
  );
}

export default Question