import React from "react";
import bin from "../../assets/icons/bin.svg";

const Delete = ({text}) => {
  return (
    <div className="flex w-auto items-center gap-2 rounded-[5px] border border-red p-1 min-w-max cursor-pointer">
      {text ? <p className="min-w-max text-sm text-red">{text}</p> : null }
      <img src={bin} alt="" />
    </div>
  );
};
export default Delete;
