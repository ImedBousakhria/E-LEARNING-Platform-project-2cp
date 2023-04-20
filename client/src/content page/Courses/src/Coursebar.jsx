import React, { useContext } from "react";
import profile from "../../../assets/profile/profileholder.png";
import Profile from "../../../components/reusable/Profile";
import { notificaiton } from "../../Home/content/notification";
import Notificaitonhandling from "../../../components/super/Notificaitonhandling";
import grad from "../../../assets/icons/grad.svg";
import { CoursesContext } from "../Teachercourses";
import Lessondisplayed from "../../../components/courses/Lessondisplayed";

const Coursebar = () => {
  const { barContent, setBarContent } = useContext(CoursesContext);
  const user = "said";
  return (
    <div className="sticky right-0 top-0 flex max-h-screen basis-[23%] flex-col gap-4 bg-white p-4 border-l border-gray">
      <div className="flex  justify-between ">
        <Notificaitonhandling isnotification={notificaiton} />
        <Profile profilepicture={profile} person={"said nouasria"} order={3} />
      </div>
      {barContent === null ? (
        <div className=" m-auto">
          <img src={grad} />
          <p className=" text-md mt-2 text-center font-semibold text-gray ">
            Select a lesson ...
          </p>
        </div>
      ) : (
        <div className="mt-8 w-full">
          <Lessondisplayed
            self={user === barContent.person}
            content={barContent.content}
            isDisplayed={true}
            setBarContent={setBarContent}
          />
        </div>
      )}
    </div>
  );
};
export default Coursebar;
