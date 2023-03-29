import React from 'react'
import rightarrow from '../assets/icons/rightarrow.svg'

const GetStarted = ({text}) => {
  return (
    <a className="flex h-full w-fit items-center rounded-[10px] bg-accent px-4 font-bold text-white">
      {text}
      <span>
        <img src={rightarrow} />
      </span>
    </a>
  );
}

export default GetStarted