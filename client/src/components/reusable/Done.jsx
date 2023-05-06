import React from 'react'
import publish from '../../assets/icons/publish.svg'

const Done = ({onClick}) => {
  return (
    <div>
      <button
        onClick={onClick}
        className="flex w-auto items-center gap-2 rounded-[5px] bg-accent p-1 font-semibold text-white"
      >
        <span>Done</span>
        <img src={publish} />
      </button>
    </div>
  )
}

export default Done