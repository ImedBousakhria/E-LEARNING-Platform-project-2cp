import React, { createContext, useState } from "react";
import Main from "./src/Main";
import Notification from "./src/Notification";
import { assignmentteacher } from "./content/main";


export const IndexElementContext = createContext();
const Assignment = ({ index }) => {
  const elementIndex = useState(null);
  const editMode = useState(false) ;
  const firstContent = useState(assignmentteacher) ; 
  const showDiscussion = useState("hidden") ;  
  if (index === 3) {
    return (
      <IndexElementContext.Provider value={{elementIndex,editMode,firstContent, showDiscussion}}>
        <Main />
        <Notification />
      </IndexElementContext.Provider>
    );
  } else {
    return null;
  }
};

export default Assignment;
