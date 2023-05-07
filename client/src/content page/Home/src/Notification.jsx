import React, { useContext } from "react";
import profile from "../../../assets/profile/profileholder.png";
import { propsContext } from "../../Mainapp";
import Upcoming from "../../../components/home/Upcoming";
import Recent from "../../../components/reusable/Recent";
import Notificaitonhandling from "../../../components/super/Notificaitonhandling";
import Profile from "../../../components/reusable/Profile";
import DiscussionForums from "../../../components/super/DiscussionForums";
import { homeContext } from "../Home";
import Profilepage from "../../../components/super/Profilepage";

const Notification = () => {
  const { notificaiton, profileShown } = useContext(propsContext);
  const { announcementState } = useContext(homeContext);
  return (
    <div className="sticky right-0 top-0 flex h-[100vh] basis-[23%] flex-col gap-8 border-l border-gray bg-white p-4">
      <div className="flex justify-between">
        <Notificaitonhandling />
        <DiscussionForums
          type={"announcement"}
          firstContent={announcementState}
        />
        <Profile profilepicture={profile} person={"said nouasria"} order={3} />
      </div>
      {profileShown ? (
        <Profilepage name={"imed"} />
      ) : (
        <div>
          <div>
            <Upcoming />
          </div>
          <div>
            <Recent />
          </div>
        </div>
      )}
    </div>
  );
};

export default Notification;
