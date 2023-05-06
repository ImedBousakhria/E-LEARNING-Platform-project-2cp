import React from "react";
import edit from "../../assets/icons/edit.svg";

const Edit = ({text}) => {
  return <div className="flex w-auto p-1 items-center gap-2 rounded-[5px] border border-accent cursor-pointer ">
    {text ? <span className="min-w-max text-sm text-accent">Edit</span> : null}
    <img src={edit} alt="" />
  </div>;
}

export default Edit;