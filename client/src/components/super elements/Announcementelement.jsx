import React from 'react'
import Profile from '../reusable/Profile';

const Announcementelement = ({ profilepicture, person, content, image }) => {
  return (
    <div className="flex   flex-col  gap-2 rounded-[10px] bg-assignmentbg p-2 text-darkgray">
      <div>
        <Profile profilepicture={profilepicture} person={person} />
      </div>
      <div className="flex w-full items-end">
        <div style={{ flexBasis: image ? "70%" : "100%" }}>
          <p>{content}</p>
        </div>
        <div style={{ flexBasis: image ? "30%" : "0%" }}>
          {image ? <img className="w-full object-cover" src={image} /> : null}
        </div>
      </div>
    </div>
  );
};

export default Announcementelement;
