import React, { useContext } from 'react'
import messages from '../../assets/icons/messages.svg' ; 
import { IndexElementContext } from '../../content page/Assignment/Assignment';


const Message = ({type}) => {
  /* var contextProvider ; 
  if(type == "assignment") {
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
  return (
    <button onClick={(e)=> type=="assignment"? handleClick(e):null}>
      <img src={messages} />
    </button>
  )
}

export default Message