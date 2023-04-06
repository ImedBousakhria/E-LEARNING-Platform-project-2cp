import React from 'react'
import selectassignment from '../assets/icons/selectassignment.svg' ; 

const Selectassginment = () => {
  return (
    <div className='flex flex-col gap-4'>
      <img src={selectassignment} />
      <p className='text-darkgray'>Select assignment...</p>
    </div>
  )
}

export default Selectassginment