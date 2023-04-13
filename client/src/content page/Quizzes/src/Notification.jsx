import React, { useContext, useState } from "react";
import profile from "../../../assets/profile/profileholder.png";
import { IndexElementContextquiz } from "../Quizzes";
import Assignmentnotificationelement from "../../../components/super elements/Activitiesnotificationelement";
import { teacherQuizzes } from "../content/main";
import Selectactivities from "../../../components/super/Selectactivities";
import Notificaitonhandling from "../../../components/super/Notificaitonhandling";
import Profile from "../../../components/reusable/Profile";
import { notificaiton } from "../../Home/content/notification";

const Notification = () => {
  const [indexElement] = useContext(IndexElementContextquiz);
  console.log(indexElement);

  return (
    <div className="sticky right-0 top-0 flex max-h-[100vh] basis-[23%] flex-col gap-8 bg-white p-4">
      <div className="flex justify-between">
        <Notificaitonhandling isnotification={notificaiton} />
        <Profile profilepicture={profile} person={"said nouasria"} order={3} />
      </div>

      {indexElement ? (
        <Assignmentnotificationelement
          element={teacherQuizzes[indexElement - 1]}
        />
      ) : (
        <div className="flex h-full items-center justify-center">
          <Selectactivities type={"quiz"} />
        </div>
      )}
    </div>
  );
};

export default Notification;
