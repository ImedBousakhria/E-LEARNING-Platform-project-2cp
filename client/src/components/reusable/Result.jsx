import React from 'react'

const Result = ({text, mark}) => {
  return (
    <div className="flex justify-center gap-4 flex-shrink-0 text-center rounded-[5px] bg-white px-3 py-2 font-semibold text-[0.875rem] text-accent">
      <p className='text-[0.875rem] font-bold'>{text} </p>
      <p className='text-[0.875rem]'>{mark}</p>
    </div>
  );
}

export default Result