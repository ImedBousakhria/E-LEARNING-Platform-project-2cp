import React, { useContext, useState, useEffect } from "react";
import profile from "../../../assets/profile/profileholder.png";
import { IndexElementContextquiz } from "../Quizzes";
import { teacherQuizzes } from "../content/main";
import Selectactivities from "../../../components/super/Selectactivities";
import Notificaitonhandling from "../../../components/super/Notificaitonhandling";
import Profile from "../../../components/reusable/Profile";
import QuizNotificationElement from "../../../components/quizzes/components/QuizNotificationElement";
import { propsContext } from "../../Mainapp";
import Quizzcontainer from "../../../components/quizzes/Quizzcontainer";
import DiscussionForums from "../../../components/super/DiscussionForums";
import Profilepage from "../../../components/super/Profilepage";
import { authContext } from "../../../App";
import axios from "axios";

const Notification = () => {
  const { elementIndex, dataElements } = useContext(IndexElementContextquiz);
  const { notificaiton, profileShown } = useContext(propsContext);

  const { userID } = useContext(authContext);
  const [connectedUser, setConnetedUser] = useState();

  useEffect(() => {
    const getUserById = async (id) => {
      try {
        const response = await axios.get(
          `http://localhost:3000/user/get/${id}`
        );
        const user = response.data;
        console.log(user);
        setConnetedUser(user);
        
      } catch (error) {
        console.error(error);
      }
    };

    getUserById(userID);
    console.log(connectedUser)
  }, [userID]);

  return (
    <div className="sticky right-0 top-0 flex max-h-[100vh] basis-[23%] flex-col gap-8 border-l border-gray bg-white p-4">
      <div className="flex justify-between">
        <Notificaitonhandling isnotification={notificaiton} />
        { connectedUser && <Profile
          profilepicture={profile}
          person={connectedUser.firstName + " " + connectedUser.lastName}
          order={3}
        />}
      </div>
      {profileShown ? (
        <Profilepage name={"imed"} />
      ) : elementIndex[0] ? (
        <QuizNotificationElement element={dataElements[elementIndex[0] - 1]} />
      ) : (
        <div className="flex h-full items-center justify-center">
          <Selectactivities type={"quiz"} />
        </div>
      )}
    </div>
  );
};

export default Notification;
