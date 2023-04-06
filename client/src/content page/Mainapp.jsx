import React, { createContext, useContext, useState } from "react";
import Home from "./Home/Home";
import Sidebarteacher from "./Home/src/Sidebarteacher";
import Assignment from "./Assignment/Assignment";

export const indexNavigation = createContext();

const Mainapp = () => {
  const Indexhandle = useState(0);

  return (
    <indexNavigation.Provider value={Indexhandle}>
      <div className="flex w-full">
        <Sidebarteacher />
        <Home index={Indexhandle[0]} />
        <Assignment index={Indexhandle[0]} />
      </div>
    </indexNavigation.Provider>
  );
};

export default Mainapp;
