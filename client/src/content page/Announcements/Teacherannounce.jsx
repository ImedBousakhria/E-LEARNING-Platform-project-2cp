import React, { useContext } from "react";
import Announce from "./src/Announcemain";
import Announcebar from "./src/Announcebar";
import { useState } from "react";
import { announcement } from "../Home/content/main"; 
import { createContext } from "react";
import { propsContext } from "../Mainapp";

export const AnnouncementContext = createContext();
const Teacherannounce = ({index}) => {
  const [barContent, setBarContent] = useState(null);
  const [items, setItem] = useState(announcement);
  const [editMode, setEditMode] = useState(false);
  const [contentToEdit, setContentToEdit] = useState(); // not only the description
  const [Acontent, setContent] = useState({}); // form content
  const { courses } = useContext(propsContext);

  if (index == 1) {
    let announcementone = courses.map((Element) => Element.courseID.announcements);
    let announcements = announcementone.flatMap((Element) => Element);
    console.log(announcements);

    return (
      <AnnouncementContext.Provider
        value={{
          items,
          setItem,
          barContent,
          setBarContent,
          editMode,
          setEditMode,
          contentToEdit,
          setContentToEdit,
          Acontent,
          setContent,
          announcements,
        }}
      >
        <>
          <Announce />
          <Announcebar />
        </>
      </AnnouncementContext.Provider>
    );
  } else {
    return null;
  }
};

export default Teacherannounce;
