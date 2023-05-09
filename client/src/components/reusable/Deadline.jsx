import React from 'react'

const Deadline = ({deadline, missed}) => {
  return (
    <div className='max-w-[4ch]'>
      <p
        className={`flex text-${
          missed ? "red" : "accent"
        } flex-col text-[12px] font-medium `}
      >
        <span>Deadline</span>
        <span className='overflow-hidden'>{deadline}</span>
      </p>
    </div>
  );
}

export default Deadline