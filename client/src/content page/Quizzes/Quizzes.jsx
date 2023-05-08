import React, { createContext, useContext, useEffect, useState } from "react";
import Main from "./src/Main";
import Notification from "./src/Notification";
import { teacherQuizzes } from "./content/main";
import { propsContext } from "../Mainapp";
import { useQuery } from "@tanstack/react-query";
import { fetchCours, fetchItems, fetchQuizzes } from "../dataFetch";
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


    /* const { data, status, error } = useQuery(
      ["items"],
      () => fetchItems(courses),
      { enabled: index == 4 }
    ); */

  if (index == 4 /* && status == "success" */) {
    //console.log(data.quizzes);
    let dataElements = courses.map((Element) => Element.courseID.quizzes);
    dataElements = dataElements.flatMap((Element) => Element);
    console.log(dataElements);
    return (
      <IndexElementContextquiz.Provider
        value={{ elementIndex, editMode, dataElements, showDiscussion }}
      >
        <Main />
        <Notification />
      </IndexElementContextquiz.Provider>
    );
  } /* else if (index == 4 && status == "loading") {
    return <div>loading</div>;
  }  */else {
    return null;
  }

};

export default Quizzes;

/* console.log(courses);  */

  /* const { data, status, error } = useQuery(
    [`course${courseIndex}`, courses[courseIndex]],
    async ({ queryKey }) => {
      let id = queryKey[1].courseID;
      try {
        const res = await fetch(`http://localhost:3000/course/get/${id}`);
        const data = await res.json();
        console.log(data.quizzes) ; 
        setQuizids(data.quizzes);
        console.log(quizIds) ; 
        return data;
      } catch (e) {
        console.log(e);
      }
    },
    { enabled: index == 4 }
  ); */

  /* useEffect(()=> {
    if(status =="success") {
      fetch(`http://localhost:3000/quizz/get/${data.quizzes[1]}`)
    .then(res=>res.json())
    .then(data => console.log(data))
    .catch(e=>console.log(e))
    }
    
  }, [data.quizzes]) */


  /* function  fetchQuizzesById(ids) {
    ids.forEach(element => {

      useEffect(()=> {
        const res = fetch(`http://localhost:3000/quizz/get/${element}`)
    .then(res => {if(res.ok) {
      return res.json();
    }else {
      throw new Error("no fetch data")
    }})
    .then(data => data )
    .catch(e => {console.log(e)})
      }, [])
      console.log(element);
    

    res.then(data=> console.log(data))
    
  });
    
  } */
  /* console.log(data) ;
    setQuizArray([...quizArray, data]) ; */

    /* const { data, status, error } = useQuery(
      [`quiz${id}`, id],
      async ({ queryKey }) => {
        try {
          const res = await fetch(`http://localhost:3000/quizz/get/${id}`);
          const data = await res.json();
          return data;
        } catch (e) {
          console.log(e);
        }
      }
    );
    if(status =="success") {
    } */