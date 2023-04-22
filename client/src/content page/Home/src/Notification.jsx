import React, { useContext } from "react";
import profile from "../../../assets/profile/profileholder.png";
import { propsContext } from "../../Mainapp";
import Upcoming from "../../../components/home/Upcoming";
import Recent from "../../../components/home/Recent";
import Notificaitonhandling from "../../../components/super/Notificaitonhandling";
import Profile from "../../../components/reusable/Profile";

const Notification = () => {
  const {notificaiton} = useContext(propsContext) ; 
  return (
    <div className="sticky right-0 top-0 flex h-[100vh] basis-[23%] flex-col gap-8 bg-white p-4 border-l border-gray">
      <div className="flex justify-between">
        <Notificaitonhandling isnotification={notificaiton} />
        <Profile profilepicture={profile} person={"said nouasria"} order={3} />
      </div>
      <div>
        <Upcoming />
      </div>
      <div>
        <Recent />
      </div>
    </div>
  );
};

export default Notification;
