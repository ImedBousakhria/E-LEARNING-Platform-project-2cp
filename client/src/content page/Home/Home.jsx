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
  console.log(courses) ; 
  const file = useState(null)
  const onDocumentLoadSuccess = useState(null) ; 
  const numPages = useState(null)

  console.log(courses) ; 
  
  const firstContent = useState(recentLesson); 
  const elementIndex = useState(null) ; 
  const showDiscussion = useState("hidden") ;
  if(index === 0) {
    let schedulesHoler = courses.map((Element) => Element?.schedules);
    const schedulesholdertwo = schedulesHoler.flatMap((Element) => Element);
    const schedulesthree = schedulesholdertwo.reduce((acc, item) => {
      const key = item?.day;
      console.log(key);
      if (!acc[key]) {
        acc[key] = [];
      }
      acc[key].push(item);
      return acc;
    }, {});
    const schedules = Object.entries(schedulesthree)
      .filter(([key], index) => {
        return key !== "satur";
      })
      .map(([, value]) => value);
    console.log();

    //schedules.sort((a, b) => days.indexOf(a.date) - days.indexOf(b.date));
    console.log(schedules);

    let submissionsone = courses.map((Element) => Element?.assignments);
    console.log(submissionsone);
    let submissionsthree = submissionsone.flatMap((Element) => Element);
    console.log(submissionsthree);
    let submissionstwo = submissionsthree.map(
      (Element) => Element?.submissions
    );
    console.log(submissionstwo);
    let submissions = submissionstwo.flatMap((Element) => Element);

    let dataElementsone = courses.map((Element) => Element?.lessons);
    let dataElements = dataElementsone.flatMap((Element) => Element);
    console.log(dataElements);

    let announcementone = courses.map((Element) => Element?.announcements);
    let announcements = announcementone.flatMap((Element) => Element);

    console.log(announcements);

    return (
      <homeContext.Provider
        value={{
          firstContent,
          dataElements,
          announcements,
          schedules,
          submissions,
          elementIndex,
          showDiscussion,
          file,
          onDocumentLoadSuccess,
          numPages,          
        }}
      >
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
