import React from 'react'
import delet from '../assets/icons/delete.svg' ;  

const Deleteassignment = ({text}) => {
  return (
    <button className='flex gap-2 border border-red rounded-[5px] p-2 items-center text-red'>
      {text}
      <img src={delet} />
    </button>
  )
}

export default Deleteassignment