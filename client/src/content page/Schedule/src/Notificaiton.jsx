import React, { useContext, useEffect, useState } from "react";
import Notificaitonhandling from "../../../components/super/Notificaitonhandling";
import { propsContext } from "../../Mainapp";
import Profile from "../../../components/reusable/Profile";
import profile from "../../../assets/profile/profileholder.png";
import Selectactivities from "../../../components/super/Selectactivities";
import CaledarNotificationElement from "../../../components/schedule/CaledarNotificationElement";
import { scheduleContext } from "../Schedule";
import Profilepage from "../../../components/super/Profilepage";
import { authContext } from "../../../App";
import axios from "axios";

const Notificaiton = () => {
  const { notificaiton, profileShown } = useContext(propsContext);
  const { eventState } = useContext(scheduleContext);
  const { elementIndex } = useContext(scheduleContext);

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
    <div className="sticky right-0 top-0 flex max-h-[100vh] basis-[23%] flex-col gap-8 bg-white p-4">
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
      ) : elementIndex[0] != null ? (
        <CaledarNotificationElement element={eventState[0][elementIndex[0]]} />
      ) : (
        <div className="flex h-full items-center justify-center">
          <Selectactivities type={"calendar"} />
        </div>
      )}
    </div>
  );
};

export default Notificaiton;
