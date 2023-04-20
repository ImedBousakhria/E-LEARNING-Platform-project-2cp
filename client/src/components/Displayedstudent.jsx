import React from "react";
import bigsaid from "../assets/images/displayedsaid.png";
import Recentsub from "./Recentsub";

const Displayedstudent = ({ person, profilepicture, group }) => {
  return (
    <div className="flex flex-col gap-8 pr-2">
      <div className="flex h-full gap-4">
        <div className=" h-36 w-36 ">
          <img className=" h-full w-full object-cover" src={bigsaid} alt="" />
        </div>
        <div className="flex flex-col justify-center gap-4 font-[500] break-all max-w-[9rem]">
          <p className=" text-base whitespace-wrap">{person}</p>
          <p className=" text-base">{group}</p>
        </div>
      </div>
      <Recentsub/>
    </div>
  );
};
export default Displayedstudent;
