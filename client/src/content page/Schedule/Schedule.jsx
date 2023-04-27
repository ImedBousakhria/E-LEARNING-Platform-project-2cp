import React, { createContext, useState } from 'react'
import Main from './src/Main'
import Notificaiton from './src/Notificaiton'

export const scheduleContext = createContext();

const Schedule = ({index}) => {
  const elementIndex = useState(null) ; 
  const eventState = useState([]);
  const editMode = useState(false) ; 
  if(index ===7) {
    return (
    <scheduleContext.Provider value={{elementIndex,eventState,editMode}}>
      <Main />
      <Notificaiton />
    </scheduleContext.Provider>
  )
  }else {
    return null ; 
  }
  
}

export default Schedule