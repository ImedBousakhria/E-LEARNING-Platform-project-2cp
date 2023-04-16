import React from "react";
import Profile from "../reusable/Profile";
import Mark from "../reusable/Mark";
import View from "../reusable/View";
import Score from "../reusable/Score";

const Submissionelement = ({ profilepicture, person, score }) => {
  return (
    <div className="flex justify-between rounded-[10px] bg-primary p-2">
      <Profile profilepicture={profilepicture} person={person} order={null} />
      <div className="flex gap-1">
        {score ? (
          <Score score={score} />
        ) : (
          <>
            <Mark />
            <View />
          </>
        )}
      </div>
    </div>
  );
};

export default Submissionelement;
