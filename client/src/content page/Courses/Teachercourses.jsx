import React, { useContext } from "react";
import { useState } from "react";
import { createContext } from "react";
import Coursemain from "./src/Coursemain";
import Coursebar from "./src/Coursebar";
import { propsContext } from "../Mainapp";

export const CoursesContext = createContext();
const Teachercourses = ({ index }) => {
  const [lessons, setLessons] = useState([]);
  const [courses, setCourses] = useState([]);

  const [courseId, setCourseId] = useState();
  const [showQuizzContainer, setShowQuizzContainer] = useState(false);



  const [type, setType] = useState("course");
  const [barContent, setBarContent] = useState(null);
  const [items, setItem] = useState(); // courses
  const [activeCardIndex, setActiveCardIndex] = useState();
  const [checkedLessons, setCheckedLessons] = useState({});
  const [editMode, setEditMode] = useState(false);
  const [Acontent, setContent] = useState({});
  const [activeProgIndex, setActiveProgIndex] = useState(null);
  const elementIndex = useState(null);
  const showDiscussion = useState("hidden");
  if (index == 2) {


    let dataElementsone = courses.map((Element) => Element.courseID.lessons);
    let dataElements = dataElementsone.flatMap((Element) => Element);
    console.log(dataElements); 

    let assignmentsone = courses.map((Element) => Element.courseID.assignments);
    console.log(assignmentsone);
    let assignments = assignmentsone.flatMap((Element) => Element);




    return (
      <CoursesContext.Provider
        value={{
          activeProgIndex,
          dataElements,
          assignments,
          setActiveProgIndex,
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
          showDiscussion,
          elementIndex,
          lessons,
          setLessons,
          courses,
          setCourses,
          type,
          setType,
          showQuizzContainer,
          setShowQuizzContainer,
          courseId, 
          setCourseId
        }}
      >
        <>
          <Coursemain index={index} />
          <Coursebar />
        </>
      </CoursesContext.Provider>
    );
  } else {
    return null;
  }
};

export default Teachercourses;
