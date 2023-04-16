import React from "react";
import { useState } from "react";
import Studentsmain from "./src/Studentsmain";
import Studentsbar from "./src/Studentsbar";
import { createContext } from "react";

export const StudentsContext = createContext();
const Teacherstudents = ({index}) => {
  const [barContent, setBarContent] = useState(null);
  const [items, setItem] = useState(); // students
  const [activeCardIndex, setActiveCardIndex] = useState();
  if(index == 5) {
    return (
    <StudentsContext.Provider
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
        <Studentsmain />
        <Studentsbar />
      </>
    </StudentsContext.Provider>
  );
  }else {
    return null ; 
  }
  
};

export default Teacherstudents;
