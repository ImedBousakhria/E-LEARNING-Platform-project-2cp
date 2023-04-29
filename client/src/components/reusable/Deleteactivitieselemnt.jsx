import React, { useState } from 'react'
import delet from '../../assets/icons/delete.svg' ;  
import ConfirmDelete from './ConfirmDelete';

const Deleteactivitieselemnt = ({ text }) => {
  const [confirmDelete, setConfirmDelete] = useState("hidden") ; 
  return (
    <div className='relative'>
      <button
        onClick={() => {
          confirmDelete == "hidden"
            ? setConfirmDelete("block")
            : setConfirmDelete("hidden");
        }}
        className="flex items-center gap-2 rounded-[5px] border border-red p-1 text-red"
      >
        {text}
        <img src={delet} />
      </button>
      <ConfirmDelete confirmDelete={confirmDelete} setConfirmDelete={setConfirmDelete}/>
    </div>
  );
};

export default Deleteactivitieselemnt;