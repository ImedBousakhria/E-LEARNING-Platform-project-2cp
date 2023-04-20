import React, { useContext } from 'react'
import edit from '../../assets/icons/edit.svg' ;
import { IndexElementContext } from '../../content page/Assignment/Assignment'; 

const Editactivitieselement = ({ text }) => {
  const {editMode} = useContext(IndexElementContext) ; 
  
  return (
    <button
      onClick={() => editMode[1](true)}
      className="flex items-center gap-2 rounded-[5px] border border-accent p-1 text-accent"
    >
      {text}
      <img src={edit} />
    </button>
  );
};

export default Editactivitieselement;