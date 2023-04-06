import React, { createContext, useState } from "react";
import Main from "./src/Main";
import Notification from "./src/Notification";

export const IndexElementContext = createContext();
const Assignment = ({ index }) => {
  const elementIndex = useState(null);
  if(index === 3) {
    return (
      <IndexElementContext.Provider value={elementIndex}>
        <>
          <Main />
          <Notification />
        </>
      </IndexElementContext.Provider>
    );
  }else {
    return null ; 
  }
};

export default Assignment;
