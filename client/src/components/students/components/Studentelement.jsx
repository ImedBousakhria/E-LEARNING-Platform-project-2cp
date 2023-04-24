import React from "react";
import Profile from "../../reusable/Profile";
import Delete from "../../reusable/Delete";
import Edit from "../../reusable/Edit";

const Studentelement = ({
  user,
  person,
  profilepicture,
  group,
  onClick,
  isActive,
}) => {
  return (
    <div
      className={`
    ${isActive ? " bg-gray" : " bg-assignmentbg"}
    flex h-max cursor-pointer items-center justify-between rounded-[10px] p-2`}
      onClick={onClick}
    >
      <Profile profilepicture={profilepicture} person={person} />

      <p
        className={`seperator flex items-center gap-3  ${
          isActive ? " text-white " : "text-gray "
        }`}
      >
        {group}
      </p>
      {user === "admin" && (
        <div className="flex gap-1 ">
          <Delete />
          <Edit />
        </div>
      )}
    </div>
  );
};

export default Studentelement;
/* */
