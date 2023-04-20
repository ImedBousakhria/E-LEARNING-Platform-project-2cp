import React from "react";

const Profile = ({profilepicture, person, order}) => {
  return (
    <div className="flex gap-2 break-all "> {/* truncate/max width here */}
      <div style={{order:order}} className="flex-shrink-0">
        <img src={profilepicture} />
      </div>
      <p className="text-black">{person}</p>
    </div>
  );
};

export default Profile;
