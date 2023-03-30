import React from "react";

const Profile = ({profilepicture, person, order}) => {
  return (
    <div className="flex gap-2">
      <div style={{order:order}}>
        <img src={profilepicture} />
      </div>
      <p className="text-black">{person}</p>
    </div>
  );
};

export default Profile;
