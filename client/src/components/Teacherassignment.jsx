import React, { useState } from 'react'
import Assignmentheader from './Assignmentheader';
import Assignmentbody from './Assignmentbody';

const Teacherassignment = () => {

  const [checkall, setCheckall] = useState(false) ; 

  return (
    <div className="flex flex-col gap-4 rounded-[10px] bg-white p-4">
      <div>
        <h2 className="text-[1.25rem]">Your assignments</h2>
      </div>
      <div className='flex flex-col gap-4'>
        <Assignmentheader setCheckall={()=>checkall?setCheckall(false):setCheckall(true)} />
        <Assignmentbody checkall={checkall}/>
      </div>
    </div>
  );
}

export default Teacherassignment