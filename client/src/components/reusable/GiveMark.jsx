import React from "react";
import { useForm } from "react-hook-form";
import publish from "../../assets/icons/publish.svg";

const GiveMark = ({showGiveMark}) => {
  const { register, reset, handleSubmit } = useForm();
  return (
    <div className={`absolute ${showGiveMark} z-10 -left-[100%] top-[110%] bg-white p-1 rounded-[2px] `}>
      <p className="text-black whitespace-nowrap">Give mark</p>
      <form className="flex gap-1">
        <label htmlFor="mark" className="basis-[50%]">
          <input className="p-1"  type="number" name="mark" max="20" min="00" id="mark" {...register("mark")} />
        </label>
        <button type="submit" className="bg-accent basis-[30%] flex justify-center items-center rounded-[5px]">
          <img className="" src={publish} />
        </button>
      </form>
    </div>
  );
};

export default GiveMark;
