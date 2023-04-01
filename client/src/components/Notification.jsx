import React, { useState } from 'react'
import notification from '../assets/icons/notification.svg' ; 
import notificationemptyicon from '../assets/icons/notificationempty.svg' ; 
import notificationrevievedicon from '../assets/icons/notificationrevieved.svg' ; 


const Notification = ({isnotification}) => {
  const [notificationempty, setNotificationempty] = useState(notificationemptyicon) ; 
  const [notificationrevieved, setNotificationrevieved] = useState(notificationrevievedicon) ; 
  isnotification ? (
    <button className="" onClick={() => setNotificationrevieved(notification)}>
      <img src={notificationrevieved} />
    </button>
  ) : (
    <button className="" onClick={() => setNotificationempty(notification)}>
      <img src={notificationempty} />
    </button>
  );
}

export default Notification