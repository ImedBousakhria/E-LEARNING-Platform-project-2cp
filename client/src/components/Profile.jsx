import React from "react";

const Profile = ({profilepicture, person, order}) => {
  return (
    <div className="flex gap-2">
      <div style={{ order: order }}>
        <img src={profilepicture} />
      </div>
      <p className="font-semibold capitalize text-black text-[1rem]">
        {person}
      </p>
    </div>
  );
};

export default Profile;
