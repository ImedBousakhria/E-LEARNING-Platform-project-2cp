import React from 'react'
import search from "../../assets/icons/search.svg";


const Search = ({handleClick}) => {
  return (
    <button onClick={handleClick} className="flex items-center gap-2 rounded-[10px] border border-gray p-3 ">
      <img src={search} />
      <p className='text-gray w-[8rem] text-[1rem] text-left'>Search</p>
    </button>
  );
}

export default Search