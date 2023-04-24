import React from 'react'
import drop from '../../assets/icons/drop.svg' ; 

const Activitiesheaderelement = ({ title }) => {
  return (
    <button className="grid-span-1 flex items-center gap-2 ">
      <img src={drop} />
      {title}
    </button>
  );
};

export default Activitiesheaderelement;