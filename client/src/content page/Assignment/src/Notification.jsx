import React, { useContext, useState } from "react";
import profile from "../../../assets/profile/profileholder.png";
import { IndexElementContext } from "../Assignment";
import Activitiesnotificationelement from "../../../components/super elements/Activitiesnotificationelement";
import { assignmentteacher } from "../content/main";
import Selectactivities from "../../../components/super/Selectactivities";
import Notificaitonhandling from "../../../components/super/Notificaitonhandling";
import Profile from "../../../components/reusable/Profile";
import { notificaiton } from "../../Home/content/notification";

const Notification = () => {
  const [indexElement] = useContext(IndexElementContext);
  console.log(indexElement);

  return (
    <div className="sticky right-0 top-0 flex max-h-[100vh] basis-[23%] flex-col gap-8 bg-white p-4 border-l border-gray">
      <div className="flex justify-between">
        <Notificaitonhandling isnotification={notificaiton} />
        <Profile profilepicture={profile} person={"said nouasria"} order={3} />
      </div>

      {indexElement ? (
        <Activitiesnotificationelement
          element={assignmentteacher[indexElement - 1]}
        />
      ) : (
        <div className="flex h-full items-center justify-center">
          <Selectactivities type={"assignment"} />
        </div>
      )}
    </div>
  );
};

export default Notification;
