import React, { createContext, useContext, useState } from "react";
import Main from "./src/Main";
import Notificaiton from "./src/Notificaiton";
import { propsContext } from "../Mainapp";
import { fetchItems } from "../dataFetch";
import { useQuery } from "@tanstack/react-query";

export const scheduleContext = createContext();

const Schedule = ({ index }) => {
  const { courses } = useContext(propsContext);

  const { data, status, error } = useQuery(
    ["items"],
    () => fetchItems(courses),
    { enabled: index == 7 }
  );

  const elementIndex = useState(null);
  const eventState = useState([]);
  const editMode = useState(false);



  if (index === 7 && status == "success") {
    return (
      <scheduleContext.Provider value={{ elementIndex, eventState, editMode }}>
        <Main />
        <Notificaiton />
      </scheduleContext.Provider>
    );
  } else if(index == 7 && status =="loading" ) {
    return <div>loading</div>;
  }else {
    return null 
  }
};

export default Schedule;
