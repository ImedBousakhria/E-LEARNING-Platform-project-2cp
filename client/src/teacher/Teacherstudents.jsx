import React from "react";
import Sidebarteacher from "./src/Sidebarteacher";
import Notification from "./src/Notification";
import { useState, useContext } from "react";
import Studentsmain from "./src/Studentsmain";
import Studentsbar from "./src/Studentsbar";
import { createContext } from "react";

export const StudentsContext = createContext();
const Teacherstudents = () => {
  const [barContent, setBarContent] = useState(null);
  const [items, setItem] = useState(); // students
  const [activeCardIndex, setActiveCardIndex] = useState();

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
      <div className="flex">
        <Sidebarteacher />
        <Studentsmain />
        <Studentsbar />
      </div>
    </StudentsContext.Provider>
  );
};

export default Teacherstudents;
