import React from "react";
import bigsaid from "../../assets/images/displayedsaid.png";
import Recentsub from "../students/Recentsub";
import Edit from "./Edit";
import Delete from "./Delete";

const User = ({ user }) => {
  return (
    <div className="flex flex-col">
      <div className=" flex flex-col">
        <div className=" h-36 w-36 place-self-center ">
          <img className=" h-full w-full object-cover" src={bigsaid} alt="" />
        </div>

        <div className="flex flex-col ">
          <div className=" flex justify-between">
            <p>Imed Bousakhria</p>
            <div className="flex gap-1">
              {" "}
              <Edit />
              <Delete />
            </div>
          </div>
          <div className="">Courses ...</div>
          <div className="">Imedbousakhria@gmail.com</div>
          <div className="">0557863631</div>
        </div>
      </div>
      <Recentsub />
    </div>
  );
};

export default User;
