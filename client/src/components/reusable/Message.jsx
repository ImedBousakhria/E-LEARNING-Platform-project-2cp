import React, { useContext } from 'react'
import messages from '../../assets/icons/messages.svg' ; 


const Message = ({handleClick}) => {
  return (
    <button onClick={handleClick}>
      <img src={messages} />
    </button>
  )
}

export default Message