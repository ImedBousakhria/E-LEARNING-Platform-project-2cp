import React, { useContext, useState } from "react";
import notification from "../../assets/icons/notification.svg";
import notificationemptyicon from "../../assets/icons/notificationempty.svg";
import notificationrecievedicon from "../../assets/icons/notificationrecieved.svg";
import Notificationcontentelement from "../super elements/Notificationcontentelement";
import close from "../../assets/icons/close.svg";
import { propsContext } from "../../content page/Mainapp";

const Notificaitonhandling = ({ isnotification }) => {
  const { notificationReaded } = useContext(propsContext); ; 
  if (isnotification && !notificationReaded[0]) {
    var notificationIcon = notificationrecievedicon;
  } else {
    var notificationIcon = notificationemptyicon;
  }
  const [notificaitonState, setNoficationState] = useState(notificationIcon);

  const [showNotificationcontent, setShowNotificationcontent] =
    useState("hidden");

  return (
    <>
      <button
        className=""
        onClick={() => {
          if (notificaitonState === notification) {
            setNoficationState(notificationIcon);
            setShowNotificationcontent("hidden");
          } else {
            setNoficationState(notification);
            setShowNotificationcontent("block");
            notificationReaded[1](true);
          }
        }}
      >
        <img src={notificaitonState} />
      </button>
      <div
        className={`absolute ${showNotificationcontent} top-[5%] left-0 right-0 bottom-0  p-4`}
      >
        <div className=" flex h-full  flex-col gap-4 rounded-[10px] bg-primary p-3 ">
          <div className="flex items-center justify-between">
            <h4>Notificaiton</h4>
            <button
              onClick={() => {
                setShowNotificationcontent("hidden");
                setNoficationState(notificationIcon);
              }}
            >
              <img src={close} />
            </button>
          </div>
          <div className="flex flex-col gap-4">
            {isnotification.map((Element) => {
              return (
                <Notificationcontentelement notificationelement={Element} />
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Notificaitonhandling;
