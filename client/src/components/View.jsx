import React from 'react'
import eye from '../assets/icons/eye.svg' ; 

const View = () => {
  return (
    <button className='py-2 px-4 border border-accent rounded-[10px] text-accent'>
      <img src={eye} />
    </button>
  )
}

export default View