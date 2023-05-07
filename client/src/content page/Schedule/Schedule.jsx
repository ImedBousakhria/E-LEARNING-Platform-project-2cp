import React, { createContext, useContext, useEffect, useState } from "react";
import Main from "./src/Main";
import Notificaiton from "./src/Notificaiton";
import { propsContext } from "../Mainapp";
import { fetchItems } from "../dataFetch";
import { useQuery } from "@tanstack/react-query";

export const scheduleContext = createContext();

const Schedule = ({ index }) => {
  const { courses } = useContext(propsContext);

  const handleDelete = useState(false) ; 

    const { data, status, error } = useQuery(
      ["items"],
      () => fetchItems(courses),
      { enabled: index == 7 }
    );
  

  const [courseIndex, setCourseIndex] = useState(0);

  const elementIndex = useState(null);
  const editMode = useState(false);

  if (index === 7 && status == "success") {

    let schedulesHolder = data.map((Element) => Element.schedules);
    const dataElements = schedulesHolder.flatMap((innerArray) => innerArray);
    console.log(dataElements);
    dataElements.sort((a, b) => a.position - b.position);
    
    return (
      <scheduleContext.Provider
        value={{ elementIndex, dataElements, editMode, handleDelete }}
      >
        <Main />
        <Notificaiton />
      </scheduleContext.Provider>
    );
  } else if (index == 7 && status == "loading") {
    return <div>loading</div>;
  } else {
    return null;
  }
};

export default Schedule;
