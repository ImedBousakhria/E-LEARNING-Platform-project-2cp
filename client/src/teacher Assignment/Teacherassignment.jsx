import React, { createContext, useState } from "react";
import Sidebarteacher from "../teacher/src/Sidebarteacher";
import Main from "./src/Main";
import Notification from "./src/Notification";

export const IndexElementContext = createContext() ; 
const Teacherassignment = () => {

  const elementIndex = useState(null) ; 
  console.log(elementIndex[0])
  return (
    <IndexElementContext.Provider value={elementIndex}>
      <div className="flex w-full ">
      <Sidebarteacher />
      <Main /> 
      <Notification/>
    </div>
    </IndexElementContext.Provider>
    
  );
};

export default Teacherassignment;
