import React from "react";
import Sidebarteacher from "./src/Sidebarteacher";
import Notification from "./src/Notification";
import Announce from "./src/Announcemain";
import Announcebar from "./src/Announcebar";
import { useState } from "react";
import { announcement } from "./content/main";
import { createContext } from "react";

export const AnnouncementContext = createContext();
const Teacherannounce = () => {
  const [barContent, setBarContent] = useState(null);
  const [items, setItem] = useState(announcement);
  const [editMode, setEditMode] = useState(false);
  const [contentToEdit, setContentToEdit] = useState(); // not only the description
  const [Acontent, setContent] = useState({}); // form content
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
        <Sidebarteacher />
        <Announce/>
        <Announcebar/>
      </div>
    </AnnouncementContext.Provider>
  );
};

export default Teacherannounce;
