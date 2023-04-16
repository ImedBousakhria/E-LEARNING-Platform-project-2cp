import React from "react";

const Info = ({ icon, number }) => {
  return (
    <a  className="flex gap-1">
      <img src={icon} />
      <span className="text-[0.8rem]">{number}</span>
    </a>
  );
};

export default Info;
