import React from 'react'
import rightarrow from '../../assets/icons/rightarrow.svg'
import {Link} from 'react-router-dom'

const GetStarted = ({text}) => {
  return (
    <Link
      to={"/login"}
      className="flex h-full w-fit items-center rounded-[10px] bg-accent px-4 font-bold text-white"
    >
      {text}
      <span>
        <img src={rightarrow} />
      </span>
    </Link>
  );
}

export default GetStarted