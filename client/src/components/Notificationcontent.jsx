import React, { useContext } from 'react'
import Notificationcontentelement from './Notificationcontentelement'
import close from '../assets/icons/close.svg' ; 
import { showNotification } from '../content page/Home/src/Notification';

const Notificationcontent = ({notification}) => {

  const [,setShownotificationcontent] = useContext(showNotification) ; 

  return (
    <div className=' bg-primary flex  flex-col gap-4 h-full rounded-[10px] p-3 '>
      <div className='flex items-center justify-between'>
        <h4>Notificaiton</h4>
        <button onClick={()=>setShownotificationcontent("hidden")}><img src={close} /></button>
      </div>
      <div className='flex flex-col gap-4'>
        {
          notification.map((Element)=> {
            return(
              <Notificationcontentelement notificationelement={Element} />
            )
          })
        }
      </div>
    </div>
  )
}

export default Notificationcontent