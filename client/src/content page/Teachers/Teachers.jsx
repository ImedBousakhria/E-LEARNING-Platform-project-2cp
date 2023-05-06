import React from "react";
import { useState } from "react";
import Main from "./src/Main";
import Rightbar from "./src/Rightbar";
import { createContext } from "react";

export const TeachersContext = createContext();
const Teachers = ({index}) => {
  const [barContent, setBarContent] = useState(null);
  const [items, setItem] = useState(); // students
  const [activeCardIndex, setActiveCardIndex] = useState();
  if(index == 6) {
    return (
    <TeachersContext.Provider
      value={{
        barContent,
        setBarContent,
        items,
        setItem,
        activeCardIndex,
        setActiveCardIndex,
      }}
    >
      <>
        <Main />
        <Rightbar />
      </>
    </TeachersContext.Provider>
  );
  }else {
    return null ; 
  }
  
};

export default Teachers;
