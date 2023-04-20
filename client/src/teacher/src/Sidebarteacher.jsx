import React from 'react'
import logo from '../../assets/logos/logo.svg' ; 
import { sections } from '../content/sidebar';
import Sectionside from '../../components/Sectionside';
import Help from './Help';

const Sidebarteacher = () => {
  return (
    <div className='bg-white basis-[17%] sticky left-0 top-0 p-4 max-h-[100vh] flex flex-col justify-between'>
      <div>
        <img src={logo} />
      </div>
      <div className='flex flex-col gap-4'>
        {
          sections.map((Element) => {
            return(
              <Sectionside name={Element.name} icon={Element.icon} />
            )
          })
        }
      </div>
      <div>
        <Help />
      </div>
    </div>
  )
}

export default Sidebarteacher