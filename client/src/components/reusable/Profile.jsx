import React from "react";
import { useContext } from "react";
import { propsContext } from "../../content page/Mainapp";

const Profile = ({ profilepicture, person, order }) => {
  const { setProfileShown } = useContext(propsContext);
  return (
    <div
      className="flex items-center gap-2 break-all cursor-pointer"
      onClick={() => setProfileShown(true)}
    >
      <div style={{ order: order }} className=" flex-shrink-0">
        <img src={profilepicture} />
      </div>
      <p className="text-[1rem] font-semibold capitalize text-black">
        {person}
      </p>
    </div>
  );
};

export default Profile;
