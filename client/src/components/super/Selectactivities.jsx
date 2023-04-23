import React from 'react'
import selectassignment from '../../assets/icons/selectassignment.svg' ; 
import selectquiz from '../../assets/icons/selectquiz.svg' ; 
import selectsession from '../../assets/icons/selectsession.svg' ; 

const Selectactivities = ({type}) => {
  let icon = null ; 
  if(type == "assignment") {
    icon = selectassignment ; 
  }else if(type=="quiz") {
    icon = selectquiz ; 
  }else if(type == "calendar") {
    icon = selectsession ; 
  }
  return (
    <div className="flex flex-col gap-4">
      <img src={icon} />
      <p className="text-darkgray">Select {type}...</p>
    </div>
  );
};

export default Selectactivities;