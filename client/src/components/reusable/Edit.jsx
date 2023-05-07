import React from "react";
import edit from "../../assets/icons/edit.svg";

const Edit = ({ text, onClick }) => {
  return (
    <div className="flex w-auto min-w-max flex-shrink-0 cursor-pointer items-center gap-2 rounded-[5px] border border-accent p-1 "
    onClick={onClick}
    >
      {text ? (
        <span className="min-w-max text-sm text-accent">Edit</span>
      ) : null}
      <img src={edit} alt="" />
    </div>
  );
};

export default Edit;
