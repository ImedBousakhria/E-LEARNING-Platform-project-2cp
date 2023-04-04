import React, { useState } from "react";
import submition from "../assets/icons/submition.svg";
import Deleteassignment from "./Deleteassignment";
import Editassignment from "./Editassignment";

const Assignmentbodyelement = ({ name, groupe, date, checkall  }) => {


  return (
    <div className="flex justify-between rounded-[10px] bg-primary px-[15px] py-[9px]">
      <div className="flex items-center justify-center">
        <input type="checkbox" checked={checkall}  />
      </div>
      <div className="grid-row-1 grid basis-[80%] grid-cols-3 gap-[2rem]">
        <div className="flex gap-2 ">
          <img src={submition} />
          {name}
        </div>
        <div className=" seperator">{groupe}</div>
        <div className="seperator">{date}</div>
      </div>
      <div className="flex basis-[15%] gap-2 justify-center items-center ">
        <Deleteassignment text={null} />
        <Editassignment text={null} />
      </div>
    </div>
  );
};

export default Assignmentbodyelement;
