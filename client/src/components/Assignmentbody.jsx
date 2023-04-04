import React from 'react'
import { assignmentteacher } from '../teacher Assignment/content/main'
import Assignmentbodyelement from './Assignmentbodyelement'

const Assignmentbody = ({checkall}) => {
  return (
    <div className='gap-2 flex flex-col'>
      {
        assignmentteacher.map((Element) => {
          return(
            <Assignmentbodyelement checkall={checkall} name={Element.name} groupe={Element.groupe} date={Element.date} />
          )
        })
      }
    </div>
  )
}

export default Assignmentbody