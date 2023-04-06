import React from 'react'
import profile from "../../../assets/profile/profileholder.png";
import { notificaiton } from "../content/notification";
import Upcoming from "../../../components/Upcoming";
import Recent from "../../../components/Recent";
import NotificationTeacher from "../../../components/NotificationTeacher";

const Notification = () => {
  return (
    <div className="sticky right-0 top-0 flex max-h-[100vh] basis-[23%] flex-col gap-8 bg-white p-4">
      <NotificationTeacher profile={profile} notificaiton={notificaiton} />
      <div>
        <Upcoming />
      </div>
      <div>
        <Recent />
      </div>
    </div>
  );
}

export default Notification