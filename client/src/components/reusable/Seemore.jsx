import React, { useContext } from "react";
import rightarrowgray from "../../assets/icons/rightarrowgray.svg";
import { propsContext } from "../../content page/Mainapp";

const Seemore = ({index}) => {
  const {Indexhandle} = useContext(propsContext) ; 
  return (
    <button onClick={()=>Indexhandle[1](index)} className="text-darkgray">
      <div className="flex gap-1">
        <span>See All</span>
        <img src={rightarrowgray} />
      </div>
    </button>
  );
};

export default Seemore;
