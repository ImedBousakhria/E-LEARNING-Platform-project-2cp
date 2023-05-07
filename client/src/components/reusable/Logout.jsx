import React from 'react'
import logout from '../../assets/icons/logout.svg'

const Logout = ({onClick}) => {
  return (
    <div className="flex w-auto items-center gap-2 rounded-[5px] border border-red p-1 min-w-max cursor-pointer"
    onClick={onClick}>
      <p className="min-w-max text-sm text-red">Log out</p>
      <img src={logout} alt="" />
    </div>
  )
}

export default Logout