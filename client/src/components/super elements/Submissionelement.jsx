import React from "react";
import Profile from "../reusable/Profile";
import Mark from "../reusable/Mark";
import View from "../reusable/View";

const Submissionelement = ({ profilepicture, person }) => {
  return (
    <div className="flex justify-between rounded-[10px] bg-primary p-2">
      <Profile profilepicture={profilepicture} person={person} order={null} />
      <div className="flex gap-1">
        <Mark />
        <View />
      </div>
    </div>
  );
};

export default Submissionelement;
