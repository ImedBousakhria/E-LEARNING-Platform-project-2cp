import React, { createContext, useContext, useState } from "react";
import Home from "./Home/Home";
import Sidebar from '../components/super/Sidebar';
import Assignment from "./Assignment/Assignment";
import Quizzes from "./Quizzes/Quizzes";
import Teacherannounce from "./Announcements/Teacherannounce";
import Teachercourses from "./Courses/Teachercourses";
import Teacherstudents from "./Students/Teacherstudents";
import { notificaiton } from "./content/mainapp.";
import Schedule from "./Schedule/Schedule";

export const propsContext = createContext();

const Mainapp = () => {
  const notificationReaded = useState(false);
  const Indexhandle = useState(0);

  return (
    <propsContext.Provider value={{ Indexhandle, notificaiton, notificationReaded }}>
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
};

export default Mainapp;
