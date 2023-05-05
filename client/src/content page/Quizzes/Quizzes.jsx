import React, { createContext, useContext, useEffect, useState } from "react";
import Main from "./src/Main";
import Notification from "./src/Notification";
import { teacherQuizzes } from "./content/main";
import { propsContext } from "../Mainapp";
import { useQuery } from "@tanstack/react-query";
import { fetchCours, fetchQuizzes } from "../dataFetch";
export const IndexElementContextquiz = createContext();

const Quizzes = ({ index }) => {
  const elementIndex = useState(null);
  const editMode = useState(false);
  const firstContent = useState(teacherQuizzes);
  const showDiscussion = useState("hidden");
  const { courses } = useContext(propsContext);
  const [courseIndex, setCourseIndex] = useState(0);
  const [quizIds, setQuizids] = useState([]);
  const [quizArray, setQuizArray] = useState([]);

  console.log(courses);
  const { data, status, error } = useQuery(
    [`course${courseIndex}`, courses[courseIndex]],
    async ({ queryKey }) => {
      let id = queryKey[1].courseID;
      try {
        const res = await fetch(`http://localhost:3000/course/get/${id}`);
        const data = await res.json();
        console.log(data.quizzes );
        setQuizids(data.quizzes);
        return data;
      } catch (e) {
        console.log(e);
      }
    },
    { enabled: index == 4 }
  );

  useEffect(()=> {
    if(quizIds.length>0) {
      quizArray.map((Element, index)=> {
        const {data,status,error} = useQuery(
        [``]
      )
      })
      
    }else {
      return ; 
    }
  }, [quizIds])

  if (index == 4 && status == "success") {
    /* data.quizzes.map((Element, index) => {
      const {data, status,error} = useQuery([`quiz${index}`,Element], fetchQuizzes) ;
      if(status == "success") {
        console.log(data) ; 
      }else if(error) {
        console.log(error) ; 
      }

    }) */
    console.log(data.quizzes);
    return (
      <IndexElementContextquiz.Provider
        value={{ elementIndex, editMode, firstContent, showDiscussion }}
      >
        <Main />
        <Notification />
      </IndexElementContextquiz.Provider>
    );
  } else if (index == 4 && status == "loading") {
    return <div>loading</div>;
  } else {
    return null;
  }

  /* console.log(courses);  */
};

export default Quizzes;
