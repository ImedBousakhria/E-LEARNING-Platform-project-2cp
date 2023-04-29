import React from "react";
import search from "../../assets/icons/search.svg";
import { useForm } from "react-hook-form";
import Close from "../reusable/Close";

const SearchForm = ({handleClick}) => {
  const { register} = useForm()
  return (
    <div className="absolute z-20 flex w-full justify-center">
      <form className="">
        <label
          htmlFor="search"
          className="flex items-center gap-2 rounded-[10px] border border-gray p-3 bg-white "
        >
          <img src={search} />
          <input
            type="text"
            id="search"
            placeholder="search"
            {...register("search")}
            className="border-0 outline-none focus:outline-none"
          />
          
        </label>
      </form>
      <Close handleClick={handleClick} />
    </div>
  );
};

export default SearchForm;
