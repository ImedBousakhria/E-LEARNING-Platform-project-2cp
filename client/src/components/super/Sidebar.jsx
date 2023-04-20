import React, { useContext } from 'react'
import logo from "../../assets/logos/logo.svg"; 
import { sections } from "../../content page/Home/content/sidebar";
import Sectionside from "../super elements/Sectionside";
import Help from "../../content page/Home/src/Help";
import { propsContext } from "../../content page/Mainapp";

const Sidebar = () => {
  console.log(propsContext) ; 

  const { Indexhandle } = useContext(propsContext);  ; 

  return (
    <div className='bg-white basis-[17%] sticky left-0 top-0 p-4 h-[100vh] flex flex-col justify-between border-r border-gray'>
      <div className='flex justify-center'>
        <img src={logo} />
      </div>
      <div className='flex flex-col gap-4'>
        {
          sections.map((Element, index) => {
            return (
              <Sectionside
                setIndex={() => Indexhandle[1](index)}
                iconwhite={Element.iconwhite}
                id={index}
                elementindex={Indexhandle[0]}
                name={Element.name}
                icon={Element.icon}
              />
            );
          })
        }
      </div>
      <div>
        <Help />
      </div>
    </div>
  )
}

export default Sidebar