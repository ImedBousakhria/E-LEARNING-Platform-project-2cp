import React, { createContext, useState } from 'react'
import Main from './src/Main'
import Notificaiton from './src/Notificaiton'

export const scheduleContext = createContext();

const Schedule = ({index}) => {
  const elementIndex = useState(null) ; 
  const eventState = useState([
    {
      groupe: "kids",
      teacherName: "said",
      day: "sunday",
      time: { start: "08:00", end: "10:00" },
      color: "#5271ff",
      span: 3,
      index: 0,
      position: 0,
    },
    {
      groupe: "kids",
      teacherName: "said",
      day: "saturday",
      time: { start: "08:00", end: "10:00" },
      color: "#5271ff",
      span: 5,
      index: 0,
      position: 1,
    },
    {
      groupe: "kids",
      teacherName: "said",
      day: "monday",
      time: { start: "08:00", end: "10:00" },
      color: "#5271ff",
      span: 5,
      index: 0,
      position: 2,
    },
  ]);
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