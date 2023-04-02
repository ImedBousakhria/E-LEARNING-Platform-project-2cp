import React from "react";

const Info = ({ icon, number }) => {
  return (
    <a className="flex gap-1">
      <img src={icon} />
      <span>{number}</span>
    </a>
  );
};

export default Info;
