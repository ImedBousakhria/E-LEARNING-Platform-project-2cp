import React from 'react'

const Result = ({mark}) => {
  return (
    <div className="rounded-[5px] bg-white px-3 py-2 font-semibold text-[0.875rem] text-accent">
      {mark}
    </div>
  );
}

export default Result