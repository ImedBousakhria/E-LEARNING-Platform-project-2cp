import React, { useContext } from "react";
import Notificaitonhandling from "../../../components/super/Notificaitonhandling";
import { propsContext } from "../../Mainapp";
import Profile from "../../../components/reusable/Profile";
import profile from "../../../assets/profile/profileholder.png";

const Notificaiton = () => {
  const { notificaiton } = useContext(propsContext);
  console.log(notificaiton);
  return (
    <div className="sticky right-0 top-0 flex max-h-[100vh] basis-[23%] flex-col gap-8 bg-white p-4">
      <div className="flex justify-between">
        <Notificaitonhandling isnotification={notificaiton} />
        <Profile person={"said nousria"} profilepicture={profile} />
      </div>
    </div>
  );
};

export default Notificaiton;
