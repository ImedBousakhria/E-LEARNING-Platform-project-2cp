import React, { useContext } from "react";
import profile from "../../assets/profile/profileholder.png";
import Profile from "../../components/Profile";
import { notificaiton } from "../content/notification";
import Notificationbill from "../../components/Notificationbill";
import grad from "../../assets/icons/grad.svg";
import { useState } from "react";
import { StudentsContext } from "../Teacherstudents";
import Studentelement from "../../components/Studentelement";
import Displayedstudent from "../../components/Displayedstudent";

const Studentsbar = () => {
  const {barContent} = useContext(StudentsContext)
  const user = 'said'
  return (
    <div className="sticky right-0 top-0 flex max-h-[100vh] basis-[23%] flex-col gap-4 bg-white p-4">
      <div className="flex  justify-between ">
        <Notificationbill isnotification={notificaiton} />
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
