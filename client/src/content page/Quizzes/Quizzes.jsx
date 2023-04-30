import React, { createContext,useState } from "react";
import Main from "./src/Main";
import Notification from "./src/Notification";
import { teacherQuizzes } from "./content/main";
export const IndexElementContextquiz = createContext();

const Quizzes = ({ index }) => {
  const elementIndex = useState(null);
  const editMode = useState(false) ;
  const firstContent = useState(teacherQuizzes) ;  
  const showDiscussion = useState("hidden") ; 

  if (index == 4) {
    return (
      <IndexElementContextquiz.Provider
        value={{ elementIndex, editMode, firstContent, showDiscussion }}
      >
        <Main />
        <Notification />
      </IndexElementContextquiz.Provider>
    );
  } else {
    return null;
  }
};

export default Quizzes;
