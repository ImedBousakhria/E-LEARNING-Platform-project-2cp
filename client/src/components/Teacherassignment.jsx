import React from 'react'
import Assignmentheader from './Assignmentheader';

const Teacherassignment = () => {
  return (
    <div className="flex flex-col gap-4 rounded-[10px] bg-white p-4">
      <div>
        <h2 className="text-[1.25rem]">Your assignments</h2>
      </div>
      <div>
        <Assignmentheader />
      </div>
    </div>
  );
}

export default Teacherassignment