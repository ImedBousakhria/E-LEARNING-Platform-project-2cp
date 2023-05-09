import React, { useContext } from "react";
import { useState, useEffect } from "react";
import profile from "../../../assets/profile/profileholder.png";
import { propsContext } from "../../Mainapp";
import Upcoming from "../../../components/home/Upcoming";
import Recent from "../../../components/reusable/Recent";
import Notificaitonhandling from "../../../components/super/Notificaitonhandling";
import Profile from "../../../components/reusable/Profile";
import DiscussionForums from "../../../components/super/DiscussionForums";
import { homeContext } from "../Home";
import Profilepage from "../../../components/super/Profilepage";
import { authContext } from "../../../App";
import axios from "axios";

const Notification = () => {
  const { notificaiton, profileShown } = useContext(propsContext);
  const { announcements } = useContext(homeContext);
  console.log(announcements) ;
  const {elementIndex} = useContext(homeContext) ;  

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
    <div className="sticky right-0 top-0 flex h-[100vh] basis-[23%] flex-col gap-8 border-l border-gray bg-white p-4">
      <div className="flex justify-between">
        <Notificaitonhandling />
        {
          <DiscussionForums
            type={"announcement"}
            firstContent={announcements[elementIndex[0]-1]?.comments}
          />
        }
        {connectedUser && (
          <Profile
            profilepicture={profile}
            person={connectedUser.firstName + " " + connectedUser.lastName}
            order={3}
          />
        )}
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
