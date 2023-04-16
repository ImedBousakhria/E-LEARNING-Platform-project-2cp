import React from "react";
import { useState } from "react";
import { createContext } from "react";
import Coursemain from "./src/Coursemain";
import Coursebar from "./src/Coursebar";

export const CoursesContext = createContext();
const Teachercourses = ({index}) => {
  const [barContent, setBarContent] = useState(null);
  const [items, setItem] = useState(); // courses
  const [activeCardIndex, setActiveCardIndex] = useState();
  const [checkedLessons, setCheckedLessons] = useState({});
  const [editMode, setEditMode] = useState(false);
  const [Acontent, setContent] = useState({});
  if(index== 2) {
    return (
    <CoursesContext.Provider
      value={{
        checkedLessons,
        setCheckedLessons,
        barContent,
        setBarContent,
        items,
        setItem,
        activeCardIndex,
        setActiveCardIndex,
        Acontent,
        setContent,
        editMode,
        setEditMode,
      }}
    >
      <>
        <Coursemain />
        <Coursebar />
      </>
    </CoursesContext.Provider>
  );
  }else {
    return null ; 
  }
  
};

export default Teachercourses;
