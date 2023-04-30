import React, { useContext } from "react";
import profile from "../../../assets/profile/profileholder.png";
import Profile from "../../../components/reusable/Profile";
import Notificaitonhandling from "../../../components/super/Notificaitonhandling";
import grad from "../../../assets/icons/grad.svg";
import { StudentsContext } from "../Teacherstudents";
import Displayedstudent from "../../../components/students/Displayedstudent";
import { propsContext } from "../../Mainapp";
import User from "../../../components/reusable/User";

const Studentsbar = () => {
  const { barContent } = useContext(StudentsContext)
  const {notificaiton} = useContext(propsContext)
  return (
    <div className="sticky right-0 top-0 flex max-h-screen basis-[23%] flex-col gap-4 border-l border-gray bg-white p-4">
      <div className="flex  justify-between items-center">
       <Notificaitonhandling isnotification={notificaiton} />
        <Profile profilepicture={profile} person={"said nouasria"} order={3} />
      </div>
      {barContent === null ? (
        <div className=" m-auto">
          <img src={grad} />
          <p className=" text-md mt-2 text-center font-semibold text-gray ">
            Select a student ...
          </p>
        </div>
      ) : (
        <div className="mt-8 w-full">
          <Displayedstudent
            person={barContent.person}
            group={barContent.group}
            profilepicture={barContent.profilepicture}
          />
        </div>
      )}
    </div>
  );
};
export default Studentsbar;
