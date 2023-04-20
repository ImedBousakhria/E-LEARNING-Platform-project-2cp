import React, { useState } from "react";
import notification from "../assets/icons/notification.svg";
import notificationemptyicon from "../assets/icons/notificationempty.svg";
import notificationrecievedicon from "../assets/icons/notificationrecieved.svg";

const Notificationbill = ({ isnotification }) => {
  const [notificationempty, setNotificationempty] = useState(
    notificationemptyicon
    );
  const [notificationrecieved, setNotificationrecieved] = useState(
    notificationrecievedicon
  );
  if (isnotification) {
    return (
      <button
        className=""
        onClick={() => {
          if (notificationrecieved === notification) {
            setNotificationrecieved(notificationrecievedicon);
          } else {
            setNotificationrecieved(notification);
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
          if (notificationempty === notification) {
            setNotificationempty(notificationemptyicon);
          } else {
            setNotificationempty(notification);
          }
        }}
      >
        <img src={notificationempty} />
      </button>
    );
  }
};

export default Notificationbill;