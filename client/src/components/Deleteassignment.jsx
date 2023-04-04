import React from 'react'
import delet from '../assets/icons/delete.svg' ;  

const Deleteassignment = () => {
  return (
    <button className='flex gap-2 text-red'>
      Delete
      <img src={delet} />
    </button>
  )
}

export default Deleteassignment