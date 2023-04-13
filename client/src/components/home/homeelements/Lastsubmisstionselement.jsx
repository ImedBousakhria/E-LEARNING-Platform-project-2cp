import React from "react";
import Profile from "../../reusable/Profile";

const Lastsubmisstionselement = ({
  profilepicture,
  person,
  groupe,
  assignmentname,
  date,
}) => {
  return (
    <div className="flex justify-between gap-8 text-darkgray">
      <Profile profilepicture={profilepicture} person={person} />
      <div>
        <p>{groupe}</p>
      </div>
      <div>
        <p>{assignmentname}</p>
      </div>
      <div>
        <p>{date}</p>
      </div>
    </div>
  );
};

export default Lastsubmisstionselement;
