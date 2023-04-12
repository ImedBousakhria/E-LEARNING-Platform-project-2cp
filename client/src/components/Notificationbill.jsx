import React, { useContext, useState } from "react";
import notification from "../assets/icons/notification.svg";
import notificationemptyicon from "../assets/icons/notificationempty.svg";
import notificationrecievedicon from "../assets/icons/notificationrecieved.svg";
import { showNotification } from "../content page/Home/src/Notification";

const Notificationbill = ({ isnotification }) => {

  const [notificationreaded, setNotificationreaded] = useState(false) ; 

  const [,setShownotificationcontent]  = useContext(showNotification) ; 

  const [notificationempty, setNotificationempty] = useState(
    notificationemptyicon
    );
  const [notificationrecieved, setNotificationrecieved] = useState(
    notificationrecievedicon
  );
  if (isnotification && !notificationreaded) {
    return (
      <button
        className=""
        onClick={() => {
          if (notificationrecieved === notification) {
            setNotificationrecieved(notificationrecievedicon);
            setShownotificationcontent("hidden");
          } else {
            setNotificationrecieved(notification);
            setShownotificationcontent("block")
            setNotificationreaded(true) ; 
            setNotificationempty(notification) ; 
          }
        }}
      >
        <img src={notificationrecieved} />
      </button>
    );
  } else {
    return (
      <button
        className=""
        onClick={() => {
          if (notificationempty === notification  ) {
            setNotificationempty(notificationemptyicon);
            setShownotificationcontent("hidden");
          } else {
            setNotificationempty(notification);
            setShownotificationcontent("block");
          }
        }}
      >
        <img src={notificationempty} />
      </button>
    );
  }
};

export default Notificationbill;
