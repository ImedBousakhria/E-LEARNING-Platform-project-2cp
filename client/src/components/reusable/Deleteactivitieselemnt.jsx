import React from 'react'
import delet from '../../assets/icons/delete.svg' ;  

const Deleteactivitieselemnt = ({ text }) => {
  return (
    <button className="flex items-center gap-2 rounded-[5px] border border-red p-1 text-red">
      {text}
      <img src={delet} />
    </button>
  );
};

export default Deleteactivitieselemnt;