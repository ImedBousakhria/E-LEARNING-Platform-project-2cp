import React, { useState } from 'react'
import delet from '../../assets/icons/delete.svg' ;  
import ConfirmDelete from './ConfirmDelete';

const Deleteactivitieselemnt = ({ text, type }) => {
  const [confirmDelete, setConfirmDelete] = useState("hidden") ; 
  return (
    <div className='relative'>
      <div
        onClick={() => {
          confirmDelete == "hidden"
            ? setConfirmDelete("block")
            : setConfirmDelete("hidden");
        }}
        className="flex items-center gap-2 rounded-[5px] border border-red p-1 text-red"
      >
        {text}
        <img src={delet} />
      </div>
{/*       <ConfirmDelete type={type}  confirmDelete={confirmDelete} setConfirmDelete={setConfirmDelete}/>
 */}    </div>
  );
};

export default Deleteactivitieselemnt;