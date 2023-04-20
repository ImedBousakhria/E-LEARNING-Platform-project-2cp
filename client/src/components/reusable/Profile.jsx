import React from "react";

const Profile = ({profilepicture, person, order}) => {
  return (
    <div className="flex gap-2 break-all items-center">
      <div style={{ order: order }} className=" flex-shrink-0">
        <img src={profilepicture} />
      </div>
      <p className="font-semibold capitalize text-black text-[1rem]">
        {person}
      </p>
    </div>
  );
};

export default Profile;
