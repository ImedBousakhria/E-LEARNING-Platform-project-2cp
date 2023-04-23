import React, { useContext } from "react";
import profile from "../../../assets/profile/profileholder.png";
import Profile from "../../../components/reusable/Profile";
import Notificaitonhandling from "../../../components/super/Notificaitonhandling";
import speaker from "../../../assets/icons/announcemet.svg";
import Announcementelement from "../../../components/super elements/Announcemento";
import { AnnouncementContext } from "../Teacherannounce";
import { propsContext } from "../../Mainapp";

const Announcebar = () => {
  const {notificaiton} = useContext(propsContext) ; 
  const user = "said";
  const { barContent, setBarContent } = useContext(AnnouncementContext);
  return (
    <div className="sticky right-0 top-0 flex max-h-[100vh] basis-[23%] flex-col gap-4 bg-white p-4 border-l border-gray ">
      <div className="flex  justify-between">
        <Notificaitonhandling isnotification={notificaiton} />
        <Profile profilepicture={profile} person={"said nouasria"} order={3} />
      </div>
      {barContent === null ? (
        <div className=" m-auto">
          <img src={speaker} />
          <p className=" text-md mt-2 text-center font-semibold text-gray ">
            Select an announcement ...
          </p>
        </div>
      ) : (
        <div className="mt-4">
          <Announcementelement
            self={user === barContent.person}
            profilepicture={barContent.profilepicture}
            person={barContent.person}
            content={barContent.content}
            image={barContent.image}
            isDisplayed={true}
            setBarContent={setBarContent}
          />
        </div>
      )}
    </div>
  );
};
export default Announcebar;
