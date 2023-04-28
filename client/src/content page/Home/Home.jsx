import React, { createContext, useContext, useState } from "react";
import Main from "./src/Main";
import Notification from "./src/Notification";
import { recentLesson } from "../Students/content/main"; 
import { announcement } from "./content/main";
export const homeContext = createContext() ;

const Home = ({ index }) => {
  const firstContent = useState(recentLesson); 
  const elementIndex = useState(null) ; 
  const showDiscussion = useState("hidden") ;
  const announcementState = useState(announcement) 
  if(index === 0) {
    return (
      <homeContext.Provider value={{ firstContent, elementIndex, showDiscussion, announcementState }}>
        <Main />
        <Notification />
      </homeContext.Provider>
    );
  }
  else {
    return null ; 
  }
};

export default Home;
