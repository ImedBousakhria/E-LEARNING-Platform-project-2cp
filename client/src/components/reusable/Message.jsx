import React, { useContext } from 'react'
import messages from '../../assets/icons/messages.svg' ; 


const Message = ({handleClick}) => {
  return (
    <button onClick={handleClick} className=' flex-shrink-0 min-w-max'>
      <img src={messages} />
    </button>
  )
}

export default Message;