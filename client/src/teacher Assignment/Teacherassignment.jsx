import React from "react";
import Sidebarteacher from "../teacher/src/Sidebarteacher";
import Main from "./src/Main";
import Notification from "./src/Notification";

const Teacherassignment = () => {
  return (
    <div className="flex w-full ">
      <Sidebarteacher />
      <Main /> 
      <Notification />
    </div>
  );
};

export default Teacherassignment;
