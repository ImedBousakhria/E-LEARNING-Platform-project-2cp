import React from 'react'

const Day = () => {
  return (
    <button className='border rounded-[10xpx] border-darkgray px-1 py-3 text-center'>
      <p>{date}</p>
      <p>{text}</p>
    </button>
  )
}

export default Day