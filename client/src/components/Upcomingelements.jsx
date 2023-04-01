import React from 'react'
import upcoming from '../assets/icons/upcoming.svg'

const Upcomingelements = ({ title, time, description }) => {
  return (
    <div className='flex gap-2 '>
      <div>
        <img className='' src={upcoming} />
      </div>
      <div className='flex flex-col justify-between'>
        <div className='text-[0.7rem] font-semibold'>
          <p>{title}</p>
        </div>
        <div className='flex font-light justify-around'>
          <p className='text-darkgray'>{time}</p>
          <p className='text-blue'>{description}</p>
        </div>
      </div>
    </div>
  );
};

export default Upcomingelements