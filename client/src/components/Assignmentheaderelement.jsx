import React from 'react'
import drop from '../assets/icons/drop.svg' ; 

const Assignmentheaderelement = ({title}) => {
  return (
    <button className='flex gap-2  items-center '>
      <img src={drop} />
      {title}
    </button>
  )
}

export default Assignmentheaderelement