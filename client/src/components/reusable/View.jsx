import React from 'react'
import eye from '../../assets/icons/eye.svg' ; 

const View = () => {
  return (
    <button className='p-1 border border-accent rounded-[5px] min-h-full text-accent'>
      <img src={eye} />
    </button>
  )
}

export default View