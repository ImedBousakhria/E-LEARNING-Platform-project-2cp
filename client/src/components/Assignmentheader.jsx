import React from 'react'
import { headers } from '../teacher Assignment/content/main'
import Assignmentheaderelement from './Assignmentheaderelement'

const Assignmentheader = () => {
  return (
    <div>
      <button>
        <input type='checkbox' />
      </button>
      {
        headers.map((Element) => {
          return(
            <Assignmentheaderelement title={Element.title} />
          )
        })
      }
    </div>
  )
}

export default Assignmentheader