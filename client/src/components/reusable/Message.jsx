import React, { useContext } from 'react'
import messages from '../../assets/icons/messages.svg' ; 


const Message = ({type}) => {
  var contextProvider ; 
 /*  if(type == "assignment") {
    contextProvider = IndexElementContext ; 
  }else {
    contextProvider =  null; 
  }
  const { showDiscussion } = useContext(contextProvider); ; 
  const handleClick = (e) => {
    if(showDiscussion[0] == "hidden") {
      showDiscussion[1]("block")
    }else {
      showDiscussion[1]("hidden")
    }
  } */
const Message = ({handleClick}) => {
  return (
    <button onClick={handleClick}>
      <img src={messages} />
    </button>
  )
}

export default Message