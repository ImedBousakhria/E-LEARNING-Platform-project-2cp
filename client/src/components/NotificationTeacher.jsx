import React from 'react'
import Notificationbill from '../components/Notificationbill' ; 
import Profile from '../components/Profile';

const NotificationTeacher = ({notificaiton, profile}) => {
  return (
    <div className="flex  justify-between ">
      <Profile profilepicture={profile} person={"said nouasria"} order={3} />
    </div>
  );
}

export default NotificationTeacher