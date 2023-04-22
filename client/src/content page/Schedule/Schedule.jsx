import React from 'react'
import Main from './src/Main'
import Notificaiton from './src/Notificaiton'


const Schedule = ({index}) => {
  if(index ===7) {
    return (
    <>
      <Main />
      <Notificaiton />
    </>
  )
  }else {
    return null ; 
  }
  
}

export default Schedule