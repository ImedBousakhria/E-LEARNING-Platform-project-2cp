import React from 'react'
import eye from '../assets/icons/eye.svg' ; 

const View = () => {
  return (
    <button className='px-2 py-0 border border-accent rounded-[10px] text-accent'>
      <img src={eye}  className='h-3'/>
    </button>
  )
}

export default View