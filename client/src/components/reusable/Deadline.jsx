import React from 'react'

const Deadline = ({deadline, missed}) => {
  return (
    <div>
      <p
        className={`flex text-${
          missed ? "red" : "accent"
        } flex-col text-[12px] font-medium `}
      >
        <span>Deadline</span>
        <span>{deadline}</span>
      </p>
    </div>
  );
}

export default Deadline