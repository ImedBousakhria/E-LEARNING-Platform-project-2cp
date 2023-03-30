import React from 'react'

const Sectionside = ({name, icon}) => {
  return (
    <button className='flex text-darkgray hover:bg-accent  items-center gap-2 p-2 rounded-[10px] border-darkgray border '>
      <img src={icon} />
      <p>{name}</p>
    </button>
  )
}

export default Sectionside