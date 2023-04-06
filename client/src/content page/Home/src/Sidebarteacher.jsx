import React, { useContext } from 'react'
import logo from "../../../assets/logos/logo.svg"; 
import { sections } from "../content/sidebar";
import Sectionside from "../../../components/Sectionside";
import Help from "./Help";
import { indexNavigation } from '../../Mainapp';

const Sidebarteacher = () => {

  const [elementindex, setElementindex] = useContext(indexNavigation)  ; 

  return (
    <div className='bg-white basis-[17%] sticky left-0 top-0 p-4 h-[100vh] flex flex-col justify-between'>
      <div>
        <img src={logo} />
      </div>
      <div className='flex flex-col gap-4'>
        {
          sections.map((Element, index) => {
            return(
              <Sectionside setIndex={()=>setElementindex(index)} iconwhite={Element.iconwhite} id={index} elementindex={elementindex} name={Element.name} icon={Element.icon} />
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