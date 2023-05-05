import React, { createContext, useContext, useState } from "react";
import Home from "./Home/Home";
import Sidebar from "../components/super/Sidebar";
import Assignment from "./Assignment/Assignment";
import Quizzes from "./Quizzes/Quizzes";
import Teacherannounce from "./Announcements/Teacherannounce";
import Teachercourses from "./Courses/Teachercourses";
import Teachers from './Teachers/Teachers'
import Teacherstudents from "./Students/Teacherstudents";
import { notificaiton } from "./content/mainapp.";
import Schedule from "./Schedule/Schedule";
import { fetchUser } from "./dataFetch";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";

export const propsContext = createContext();

const Mainapp = () => {
  const notificationReaded = useState(false);
  const Indexhandle = useState(0);
  const searchMode = useState(false);

  const userType = "admin";
  const { id } = useParams();
  const data = useQuery(["notificaiton", id], fetchNotifications);
 const notificaiton = data.data; 
 
  return (
    <propsContext.Provider
      value={{ Indexhandle, notificaiton, notificationReaded, searchMode }}
    >
      <div className="flex w-full">
        <Sidebar />
        <Home index={Indexhandle[0]} />
        <Teacherannounce index={Indexhandle[0]} />
        <Teachercourses index={Indexhandle[0]} />
        <Assignment index={Indexhandle[0]} />
        <Quizzes index={Indexhandle[0]} />
        <Teacherstudents index={Indexhandle[0]} />
        <Teachers index={Indexhandle[0]}/>
        <Schedule index={Indexhandle[0]} />
      </div>
    </propsContext.Provider>
  );

  const userType = { isAdmin: true, isTeacher: false, isStudent: false };
  const [notificaiton, setNotification] = useState([]) ; 
  
  const [courses, setCourses] = useState([]);

  const { data, status } = useQuery(
    ["userone", "644164aa82161f42040c7c4b"],
    async ({ queryKey }) => {
      const id = queryKey[1];
      try {
        const res = await fetch(`http://localhost:3000/user/get/${id}`, {method:"GET"});
        const data = await res.json();
        console.log(data.firstName);
        console.log(data.notifications);
        setCourses(data.courses) ; 
        setNotification(data.notifications) ; 

        return data ; 
      } catch (e) {
        console.log(e);
      }
    }
  );

  if(status =="loading") {
    return(<div>loading...</div>)
  }
  
  if (status == "success") {
    return (
      <propsContext.Provider
        value={{
          Indexhandle,
          notificationReaded,
          userType,
          searchMode,
          notificaiton,
          courses,
        }}
      >
        <div className="flex w-full">
          <Sidebar />
          <Home index={Indexhandle[0]} />
          <Teacherannounce index={Indexhandle[0]} />
          <Teachercourses index={Indexhandle[0]} />
          <Assignment index={Indexhandle[0]} />
          <Quizzes index={Indexhandle[0]} />
          <Teacherstudents index={Indexhandle[0]} />
          <Schedule index={Indexhandle[0]} />
        </div>
      </propsContext.Provider>
    );
    /* setNotification(data.notifications);
    
    setCourses(data.courses) ; */  
    
  }

  //notificaiton = data.notifications;

  

};

export default Mainapp;
