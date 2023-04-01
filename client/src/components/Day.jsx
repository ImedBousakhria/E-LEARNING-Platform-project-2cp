import React from 'react'

const Day = ({date, text, handleclick}) => {
  return (
    <button onClick={handleclick} className='border min-w-[22%] day rounded-[10px]  border-darkgray px-1 py-3 text-center'>
      <p className='font-bold'>{date}</p>
      <p className=' capitalize '>{text}</p>
    </button>
  )
}

export default Day