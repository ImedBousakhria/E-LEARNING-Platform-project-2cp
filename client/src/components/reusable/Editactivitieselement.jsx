import React from 'react'
import edit from '../../assets/icons/edit.svg' ; 

const Editactivitieselement = ({ text }) => {
  return (
    <button className="flex items-center gap-2 rounded-[5px] border border-accent p-1 text-accent">
      {text}
      <img src={edit} />
    </button>
  );
};

export default Editactivitieselement;