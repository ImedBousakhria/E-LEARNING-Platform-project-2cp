import React from 'react'
import upcoming from '../../../assets/icons/upcoming.svg'

const Upcomingelements = ({ title, time, description }) => {
  return (
    <div className="flex gap-2 ">
      <div>
        <img className="" src={upcoming} />
      </div>
      <div className="flex flex-col justify-between">
        <div>
          <p className="text-[1rem] font-medium">{title}</p>
        </div>
        <div className="flex gap-4 font-light ">
          <p className="text-[0.8125rem] text-darkgray">{time}</p>
          <p className="text-[0.8125rem] text-blue">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default Upcomingelements