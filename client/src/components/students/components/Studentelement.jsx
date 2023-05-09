import React, { useContext } from "react";
import Profile from "../../reusable/Profile";
import Delete from "../../reusable/Delete";
import Edit from "../../reusable/Edit";
import { propsContext } from "../../../content page/Mainapp";
import axios from "axios";

const Studentelement = ({
  person,
  profilepicture,
  group,
  onClick,
  isActive,
}) => {
  const handleDelete = (id) => {
    axios
      .delete(`http://localhost:3000/user/delete/${id}`)
      .then((response) => {
        // handle success, update state or trigger a re-fetch of the data
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const { userType, data } = useContext(propsContext);
  return (
    <div
      className={`
    ${isActive ? " bg-gray" : " bg-assignmentbg"}
    flex h-max cursor-pointer items-center justify-between rounded-[10px] p-2`}
      onClick={onClick}
    >
      <div className="flex-shrink-0">
        <Profile profilepicture={profilepicture} person={person} />
      </div>

      <p
        className={`seperator flex basis-[60%] items-center gap-3 ${
          isActive ? " text-white " : "text-gray "
        }`}
      >
        {group}
      </p>
      {userType.isAdmin && (
        <div className="flex gap-1 ">
          <Delete onClick={() => {}} />
          <Edit />
        </div>
      )}
    </div>
  );
};

export default Studentelement;
