import React from 'react'
import profile from "../../assets/profile/profileholder.png";
import NotificationTeacher from '../../components/NotificationTeacher.jsx';
import { notificaiton } from '../content/notification';


const Notification = () => {
  return (
    <div className="sticky right-0 top-0 flex max-h-[100vh] basis-[23%] flex-col gap-8 bg-white p-4">
      <div>
        <NotificationTeacher notificaiton={notificaiton} profile={profile} />
      </div>
    </div>
  );
}

export default Notification