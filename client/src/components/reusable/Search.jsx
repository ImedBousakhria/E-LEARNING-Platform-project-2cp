import React from 'react'
import search from "../../assets/icons/search.svg";


const Search = () => {
  return (
    <form className="flex gap-2 rounded-[10px] border border-gray p-3 ">
      <img src={search} />
      <label htmlFor="search">
        <input
          className="bg-transparant border-none p-0 focus:outline-none "
          name="search"
          type="text"
          id="search"
          placeholder="search"
        />
      </label>
    </form>
  );
}

export default Search