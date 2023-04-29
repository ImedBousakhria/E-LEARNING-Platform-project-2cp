import React from 'react'
import Deleteactivitieselemnt from './Deleteactivitieselemnt';
import Cancel from './Cancel';
import Delete from './Delete';
import delet from '../../assets/icons/delete.svg' ;
import close from '../../assets/icons/close.svg' ; 

const ConfirmDelete = ({ confirmDelete, setConfirmDelete }) => {
  return (
    <div
      className={`absolute ${confirmDelete} flex flex-col gap-2 -left-[100%] top-[110%] z-10 rounded-[2px] bg-white p-1 `}
    >
      <p className="whitespace-nowrap text-black">Are you sure?</p>
      <div className="flex justify-center gap-2">
        <button className="flex w-auto min-w-max cursor-pointer items-center gap-2 rounded-[5px] border border-red p-1">
          <img src={delet} />
        </button>
        <button
          onClick={() => {
            setConfirmDelete("hidden");
          }}
        >
          <img src={close} />
        </button>
      </div>
    </div>
  );
};

export default ConfirmDelete