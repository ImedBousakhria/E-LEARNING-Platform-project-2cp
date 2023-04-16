import React from 'react'

const Score = ({score}) => {
  return (
    <div className='p-2 rounded-[10px] text-blue border border-blue w-fit '>
      <span>{score} true</span>
    </div>
  )
}

export default Score