import React, { createContext, useState } from 'react'
import profile from "../../../assets/profile/profileholder.png";
import { notificaiton } from "../content/notification";
import Upcoming from "../../../components/Upcoming";
import Recent from "../../../components/Recent";
import NotificationTeacher from "../../../components/NotificationTeacher";
import Notificationcontent from '../../../components/Notificationcontent';
export const showNotification = createContext() ; 

const Notification = () => {

  const showNotificationcontent = useState("hidden") ; 

  return (
    <showNotification.Provider value={showNotificationcontent} >
      <div className="sticky right-0 top-0 flex h-[100vh] basis-[23%] flex-col gap-8 bg-white p-4">
      <NotificationTeacher profile={profile} notificaiton={notificaiton} />
      <div>
        <Upcoming />
      </div>
      <div>
        <Recent />
      </div>
      <div className={`absolute ${showNotificationcontent[0]} top-[5%] left-0 right-0 bottom-0  p-4 `}>
        <Notificationcontent notification={notificaiton} />
      </div>
    </div>
    </showNotification.Provider>
    
  );
}

export default Notification