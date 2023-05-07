import React, { useContext, useState } from "react";
import profile from "../../../assets/profile/profileholder.png";
import { IndexElementContext } from "../Assignment";
import Activitiesnotificationelement from "../../../components/super elements/Activitiesnotificationelement";
import { assignmentteacher } from "../content/main";
import Selectactivities from "../../../components/super/Selectactivities";
import Notificaitonhandling from "../../../components/super/Notificaitonhandling";
import Profile from "../../../components/reusable/Profile";
import { propsContext } from "../../Mainapp";
import DiscussionForums from "../../../components/super/DiscussionForums";
import Profilepage from "../../../components/super/Profilepage";

const Notification = () => {

  const { elementIndex, dataElements } = useContext(IndexElementContext);
  const { notificaiton, profileShown } = useContext(propsContext);

  return (
    <div className="sticky right-0 top-0 flex max-h-[100vh] basis-[23%] flex-col gap-8 border-l border-gray bg-white p-4">
      <div className="flex justify-between">
        <Notificaitonhandling />
        <Profile profilepicture={profile} person={"said nouasria"} order={3} />
      </div>

      {profileShown ? (
        <Profilepage name={"imed"} />
      ) : elementIndex[0] ? (
        <Activitiesnotificationelement
          element={dataElements[elementIndex[0] - 1]}
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
