import React from 'react'
import { assignmentteacher } from '../content page/Assignment/content/main'
import Assignmentbodyelement from './Assignmentbodyelement'

const Assignmentbody = ({checkall, setSelected}) => {
  return (
    <div className='gap-2 flex flex-col'>
      {
        assignmentteacher.map((Element, index) => {
          return(
            <Assignmentbodyelement  index={index+1} checkall={checkall} name={Element.name} groupe={Element.groupe} date={Element.date} />
          )
        })
      }
    </div>
  )
}

export default Assignmentbody