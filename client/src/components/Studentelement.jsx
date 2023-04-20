import React from "react";
import Profile from "./Profile";

const Studentelement = ({
  person,
  profilepicture,
  group,
  onClick,
  isActive,
}) => {
  return (
    <div
      className={`
    ${isActive ? " bg-darkgray" : " bg-assignmentbg"}
     flex h-max cursor-pointer rounded-[10px] py-2 px-4 items-center`}
      onClick={onClick}
    >
      <div className=" w-[35%] flex">
        <Profile profilepicture={profilepicture} person={person} />
      </div>
      <p
        className={`flex items-center gap-3 text-gray  ${
          isActive ? " text-white opacity-70" : ""
        }`}
      >
        <span className=" text-3xl font-extralight">|</span>
        {group}
      </p>
    </div>
  );
};

export default Studentelement;
/* */
