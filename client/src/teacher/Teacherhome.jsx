import React from 'react'
import Sidebarteacher from './src/Sidebarteacher'
import Main from './src/Main'
import Notification from './src/Notification'

const Teacherhome = () => {
  return (
    <div className='flex w-full '>
      <Sidebarteacher />
      <Main />
      <Notification />
    </div>
  )
}

export default Teacherhome