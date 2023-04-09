import React from 'react'
import Main from './src/Main'

const Quizzes = ({index}) => {
  if(index == 4) {
    return (
    <div>
      <Main />
    </div>
  )
  }else {
    return null ; 
  }
  
}

export default Quizzes