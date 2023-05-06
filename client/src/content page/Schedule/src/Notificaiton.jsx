import React, { useContext } from "react";
import Notificaitonhandling from "../../../components/super/Notificaitonhandling";
import { propsContext } from "../../Mainapp";
import Profile from "../../../components/reusable/Profile";
import profile from "../../../assets/profile/profileholder.png";
import Selectactivities from "../../../components/super/Selectactivities";
import CaledarNotificationElement from "../../../components/schedule/CaledarNotificationElement";
import { scheduleContext } from "../Schedule";
import Profilepage from "../../../components/super/Profilepage";

const Notificaiton = () => {
  const { notificaiton, profileShown } = useContext(propsContext);
  const { elementIndex, dataElements } = useContext(scheduleContext); ; 

  return (
    <div className="sticky right-0 top-0 flex max-h-[100vh] basis-[23%] flex-col gap-8 bg-white p-4">
      <div className="flex justify-between">
        <Notificaitonhandling />
        <Profile person={"said nousria"} profilepicture={profile} />
      </div>

      {profileShown ? (
        <Profilepage name={"imed"} />
      ) : elementIndex[0] != null ? (
        <CaledarNotificationElement element={dataElements[elementIndex[0]]} />
      ) : (
        <div className="flex h-full items-center justify-center">
          <Selectactivities type={"calendar"} />
        </div>
      )}
    </div>
  );
};

export default Notificaiton;
