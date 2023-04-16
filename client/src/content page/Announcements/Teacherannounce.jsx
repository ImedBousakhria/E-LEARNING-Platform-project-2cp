import React from "react";
import Announce from "./src/Announcemain";
import Announcebar from "./src/Announcebar";
import { useState } from "react";
import { announcement } from "./content/main";
import { createContext } from "react";

export const AnnouncementContext = createContext();
const Teacherannounce = ({index}) => {
  const [barContent, setBarContent] = useState(null);
  const [items, setItem] = useState(announcement);
  const [editMode, setEditMode] = useState(false);
  const [contentToEdit, setContentToEdit] = useState(); // not only the description
  const [Acontent, setContent] = useState({}); // form content
  if(index == 1) {
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
      }}
    >
      <div className="flex">
        <Announce/>
        <Announcebar/>
      </div>
    </AnnouncementContext.Provider>
  );
  }else {
    return null ; 
  }
  
};

export default Teacherannounce;
