import React, { useContext, useState } from "react";
import submition from "../assets/icons/submition.svg";
import Deleteassignment from "./Deleteassignment";
import Editassignment from "./Editassignment";
import { IndexElementContext } from "../content page/Assignment/Assignment";

const Assignmentbodyelement = ({ name, groupe, date, checkall,index,    }) => {

  const [check, setCheck] = useState(false) ; 
  const [,setElementIndex] = useContext(IndexElementContext) ; 

  return (
    <div onClick={()=>{ setElementIndex(index) ; }} className="flex justify-between items-center hover:bg-verydarkgray  rounded-[10px] bg-primary px-[15px] py-[9px]">
      <div className="flex items-center justify-center">
        <input type="checkbox" checked={checkall || check } onClick={()=>{check||checkall?setCheck(false):setCheck(true)}}  />
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
