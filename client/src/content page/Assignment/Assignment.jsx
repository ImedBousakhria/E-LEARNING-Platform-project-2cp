import React, { createContext, useContext, useState } from "react";
import Main from "./src/Main";
import Notification from "./src/Notification";
import { assignmentteacher } from "./content/main";
import { useQuery } from "@tanstack/react-query";
import { propsContext } from "../Mainapp";


export const IndexElementContext = createContext();
const Assignment = ({ index }) => {
  const elementIndex = useState(null);
  const editMode = useState(false) ;
  const firstContent = useState(assignmentteacher) ; 
  const showDiscussion = useState("hidden") ; 
  
  const { courses } = useContext(propsContext);

  const [courseIndex, setCourseIndex] = useState(0);

  const { data, status, error } = useQuery(
    [`course${courseIndex}`, courses[courseIndex]],
    async ({ queryKey }) => {
      let id = queryKey[1].courseID;
      try {
        const res = await fetch(`http://localhost:3000/course/get/${id}`);
        const data = await res.json();
        console.log(data.assignments);

        return data;
      } catch (e) {
        console.log(e);
      }
    },
    { enabled: index == 3 }
  );
  
  if (index === 3 && status == "success") {
    console.log(data.assignments);
    return (
      <IndexElementContext.Provider value={{elementIndex,editMode,firstContent, showDiscussion}}>
        <Main />
        <Notification />
      </IndexElementContext.Provider>
    );
  } else if(index == 4 && status == "loading") {
    return <div>loading...</div>;
  }else {
    return null ; 
  }
};

export default Assignment;
