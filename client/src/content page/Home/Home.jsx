import React, { createContext, useContext, useState } from "react";
import Main from "./src/Main";
import Notification from "./src/Notification";
import { recentLesson } from "../Students/content/main"; 
import { announcement } from "./content/main";
import { propsContext } from "../Mainapp";
export const homeContext = createContext() ;
import { days } from "../../components/schedule/content/days";

const Home = ({ index }) => {

  const {courses} = useContext(propsContext) ; 

  

  const firstContent = useState(recentLesson); 
  const elementIndex = useState(null) ; 
  const showDiscussion = useState("hidden") ;
  const announcementState = useState(announcement)
  if(index === 0) {
    let schedulesHoler = courses.map((Element)=>Element.courseID.schedules) ; 
    const schedulesholdertwo = schedulesHoler.flatMap((Element)=> Element)
    const schedulesthree = schedulesholdertwo.reduce((acc, item) => {
      const key = item.day;
      console.log(key)
      if (!acc[key]) {
        acc[key] = [];
      }
      acc[key].push(item);
      return acc;
    }, {});
    const schedules = Object.entries(schedulesthree)
      .filter(([key], index) => {return key !== "satur"})
      .map(([, value]) => value);
      console.log()

    //schedules.sort((a, b) => days.indexOf(a.date) - days.indexOf(b.date));
    console.log(schedules) ; 

    return (
      <homeContext.Provider value={{ firstContent,schedules,  elementIndex, showDiscussion, announcementState }}>
        <Main />
        <Notification />
      </homeContext.Provider>
    );
  }
  else {
    return null ; 
  }
};

export default Home;
