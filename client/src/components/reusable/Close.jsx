import React from 'react'
import close from "../../assets/icons/close.svg";
import closewhite from "../../assets/icons/closewhite.svg";


const Close = ({handleClick}) => {
  return (
    <button
      onClick={()=>handleClick()}
    >
      <img src={closewhite} />
    </button>
  );
}

export default Close