import React, { useContext } from "react";
import Announce from "./src/Announcemain";
import Announcebar from "./src/Announcebar";
import { useState } from "react";
import { announcement } from "../Home/content/main"; 
import { createContext } from "react";
import { useQuery } from "@tanstack/react-query";
import { fetchItems } from "../dataFetch";
import { propsContext } from "../Mainapp";

export const AnnouncementContext = createContext();
const Teacherannounce = ({index}) => {
  const [announcements, setAnnouncements] = useState([]);
  const [barContent, setBarContent] = useState(null);
  const [items, setItem] = useState(announcement);
  const [editMode, setEditMode] = useState(false);
  const [contentToEdit, setContentToEdit] = useState(); // not only the description
  const [Acontent, setContent] = useState({}); // form content
 /*  const { data, status, error } = useQuery(["items"], () =>
  fetchItems(courses), {enabled:index == 1}
); */

  if(index == 1 /* && status === 'success' */) {
    /* console.log(data); */
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
        setAnnouncements
      }}
    >
      <>
        <Announce/>
        <Announcebar/>
      </>
    </AnnouncementContext.Provider>
  );
  } /* else if(index == 4 && status == "loading") {
    return <div>loading...</div>;
  } */else {
    return null ; 
  }
  
};

export default Teacherannounce;
