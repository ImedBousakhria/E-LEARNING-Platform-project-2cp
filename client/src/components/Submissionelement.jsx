import React from 'react'
import Profile from './Profile'
import Mark from './Mark'
import View from './View'

const Submissionelement = ({profilepicture, person}) => {
  return (
    <div className='flex justify-between bg-primary p-2 rounded-[10px]'>
      <Profile profilepicture={profilepicture} person={person} order={null}  />
      <div className='flex gap-1'>
        <Mark />
        <View />
      </div>
    </div>
  )
}

export default Submissionelement