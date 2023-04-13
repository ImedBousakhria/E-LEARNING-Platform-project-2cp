import React, { createContext, useContext, useState } from "react";
import Home from "./Home/Home";
import Sidebar from '../components/super/Sidebar';
import Assignment from "./Assignment/Assignment";
import Quizzes from "./Quizzes/Quizzes";

export const propsContext = createContext();

const Mainapp = () => {
  const Indexhandle = useState(0);

  return (
    <propsContext.Provider value={{Indexhandle}}>
      <div className="flex w-full">
        <Sidebar />
        <Home index={Indexhandle[0]} />
        <Assignment index={Indexhandle[0]} />
        <Quizzes index={Indexhandle[0]} />
      </div>
    </propsContext.Provider>
  );
};

export default Mainapp;
