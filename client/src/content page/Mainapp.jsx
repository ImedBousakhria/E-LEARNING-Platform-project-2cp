import React, { createContext, useContext, useEffect, useState } from "react";
import Home from "./Home/Home";
import Sidebar from "../components/super/Sidebar";
import Assignment from "./Assignment/Assignment";
import Quizzes from "./Quizzes/Quizzes";
import Teacherannounce from "./Announcements/Teacherannounce";
import Teachercourses from "./Courses/Teachercourses";
import Teacherstudents from "./Students/Teacherstudents";
import Teachers from "./Teachers/Teachers";
import { notificaiton } from "./content/mainapp.";
import Schedule from "./Schedule/Schedule";
import { fetchItems, fetchUser } from "./dataFetch";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";

export const propsContext = createContext();
export const profileContext = createContext();

const Mainapp = () => {
  const notificationReaded = useState(false);
  const Indexhandle = useState(0);
  const searchMode = useState(false);
  const [userType, setUserTyper] = useState({});

  const [notificaiton, setNotification] = useState([]);
  const [profileShown, setProfileShown] = useState(false);
  const [courses, setCourses] = useState([]);

  // student : 64578cb4a234039c43371bf1
  // admin : 645793ffff441f996d86dc0b
  // teacher : 64578ad50ff5d69cbe16415a

  const { data, status } = useQuery(
    ["userone", "645793ffff441f996d86dc0b"],
    async ({ queryKey }) => {
      const id = queryKey[1];
      try {
        const res = await fetch(`http://localhost:3000/user/get/${id}`, {
          method: "GET",
        });
        const data = await res.json();
        //console.log(data.firstName);
        //console.log(data.notifications);
        setCourses(data.courses);
        setNotification(data.notifications);
        let userTypeHoler = {
          isAdmin: data.isAdmin,
          isTeacher: data.isTeacher,
          isStudent: data.isStudent,
        };
        setUserTyper(userTypeHoler);
        console.log(userTypeHoler, userType);
        return data;
      } catch (e) {
        console.log(e);
      }
    }
  );

  if (status == "loading") {
    return <div>loading...</div>;
  }

  if (status == "success") {
    console.log(data);
    return (
      <propsContext.Provider
        value={{
          data,
          Indexhandle,
          notificationReaded,
          userType,
          searchMode,
          notificaiton,
          courses,
          profileShown,
          setProfileShown,
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
          <Teachers index={Indexhandle[0]} />
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
