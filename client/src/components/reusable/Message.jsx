import React, { useContext } from 'react'
import messages from '../../assets/icons/messages.svg' ; 


const Message = ({handleClick}) => {
  return (
    <div onClick={handleClick} className=' flex-shrink-0 min-w-max'>
      <img src={messages} />
    </div>
  )
}

export default Message;