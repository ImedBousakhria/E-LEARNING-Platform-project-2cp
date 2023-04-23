import React, { createContext, useState } from "react";
import Main from "./src/Main";
import Notification from "./src/Notification";

export const IndexElementContext = createContext();
const Assignment = ({ index }) => {
  const elementIndex = useState(null);
  const editMode = useState(false) ; 
  if (index === 3) {
    return (
      <IndexElementContext.Provider value={{elementIndex,editMode}}>
        <Main />
        <Notification />
      </IndexElementContext.Provider>
    );
  } else {
    return null;
  }
};

export default Assignment;
