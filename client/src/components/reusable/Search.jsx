import React from "react";
import search from "../../assets/icons/searchTwo.svg";
import { useForm } from "react-hook-form";

const Search = ({  }) => {
  const { register } = useForm();
  return (
    <form className="flex bg-white items-center gap-2 rounded-[10px] border border-gray p-1 ">
      <label htmlFor="search">
        <input className="bg-transparant border-0 outline-none focus:outline-none" placeholder="Search" id="search" type="text" {...register("search")} />
      </label>
      <img src={search} />
    </form>
  );
};

export default Search;
