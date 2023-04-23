import React from 'react'
import { days } from './content/days'

const DayPicker = () => {
  return (
    <select id='daypicker' className=' border-gray border p-2 rounded-[10px]'>
      {
        days.map((Element) => {
          return(
            <option value={Element} >{Element}</option>
          )
        })
      }
    </select>
  )
}

export default DayPicker