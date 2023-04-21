import React, { createContext,useState } from "react";
import Main from "./src/Main";
import Notification from "./src/Notification";
export const IndexElementContextquiz = createContext();

const Quizzes = ({ index }) => {
  const elementIndex = useState(null);
  const editMode = useState(false) ; 

  if (index == 4) {
    return (
      <IndexElementContextquiz.Provider value={{elementIndex, editMode}}>
          <Main />
          <Notification />
      </IndexElementContextquiz.Provider>
    );
  } else {
    return null;
  }
};

export default Quizzes;
