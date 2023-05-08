import React, { useContext, useEffect, useState } from "react";
import profile from "../../../assets/profile/profileholder.png";
import Profile from "../../../components/reusable/Profile";
import Notificaitonhandling from "../../../components/super/Notificaitonhandling";
import grad from "../../../assets/icons/grad.svg";
import { TeachersContext } from "../Teachers";
import Displayedstudent from "../../../components/students/Displayedstudent";
import { propsContext } from "../../Mainapp";
import User from "../../../components/reusable/User";
import Profilepage from "../../../components/super/Profilepage";
import { authContext } from "../../../App";
import axios from "axios";

const Rightbar = () => {
  const { barContent } = useContext(TeachersContext);
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
    <div className="sticky right-0 top-0 flex max-h-screen basis-[23%] flex-col gap-4 border-l border-gray bg-white p-4">
      <div className="flex  items-center justify-between">
        <Notificaitonhandling isnotification={notificaiton} />
        { connectedUser && <Profile
          profilepicture={profile}
          person={connectedUser.firstName + " " + connectedUser.lastName}
          order={3}
        />}
      </div>
      {profileShown ? (
        <Profilepage name={"imed"} />
      ) : barContent === null ? (
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
export default Rightbar;
