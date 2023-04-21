import React, { useContext } from 'react'
import edit from '../../assets/icons/edit.svg' ;
import { IndexElementContext } from '../../content page/Assignment/Assignment'; 
import { IndexElementContextquiz } from '../../content page/Quizzes/Quizzes';

const Editactivitieselement = ({ text,type }) => {
  var contextElement= null ; 
  if(type=="quiz") {
    contextElement = IndexElementContextquiz ; 
  }else if (type == "assignment") {
    console.log("assinment")
    contextElement = IndexElementContext;
  }
  const {editMode} = useContext(contextElement) ; 
  
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