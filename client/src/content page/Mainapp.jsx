import React, { createContext, useContext, useEffect, useState } from "react";
import Home from "./Home/Home";
import Sidebar from "../components/super/Sidebar";
import Assignment from "./Assignment/Assignment";
import Quizzes from "./Quizzes/Quizzes";
import Teacherannounce from "./Announcements/Teacherannounce";
import Teachercourses from "./Courses/Teachercourses";
import Teacherstudents from "./Students/Teacherstudents";
import Teachers from "./Teachers/Teachers";
//import { notificaiton } from "./content/mainapp.";
import Schedule from "./Schedule/Schedule";
import { fetchItems, fetchUser } from "./dataFetch";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export const propsContext = createContext();
export const profileContext = createContext();

const Mainapp = () => {
  const notificationReaded = useState(false);
  const Indexhandle = useState(0);
  const searchMode = useState(false);
  //const [userType, setUserTyper] = useState({});

 // const [notificaiton, setNotification] = useState([]);
  const [profileShown, setProfileShown] = useState(false);
  //const [courses, setCourses] = useState([]);

  // student : 64578cb4a234039c43371bf1
  // admin : 645793ffff441f996d86dc0b
  // teacher : 64578ad50ff5d69cbe16415a
  let id = "645793ffff441f996d86dc0b";

  /* useEffect(async ()=> {
    try {
        const res = await fetch(`http://localhost:3000/user/get/${id}`, {
          method: "GET",
        });
        var dataone = await res.json();
        //console.log(data.firstName);
        //console.log(data.notifications);
        if(!dataone.isAdmin) {
          //setCourses(data.courses);
        }else {
          const res = await fetch(`https://localhost:3000/course/getAll`, {
            method:"GET", 
          })
          var datatwo = await res.json() ; 
          console.log(data) ; 
        }
        
        let userTypeHoler = {
          isAdmin: dataone.isAdmin,
          isTeacher: dataone.isTeacher,
          isStudent: dataone.isStudent,
        };
        setUserTyper(userTypeHoler);
        console.log(userTypeHoler, userType);
        return data;
      } catch (e) {
        console.log(e);
      }
  }) */

  const [data, setData] = useState(null);
  const [otherData, setOtherData] = useState(null);

  useEffect(() => {
    // Fetch initial data from API
    console.log("helloj");
    async function fetchData() {
      try {
        const response = await axios.get(
          `http://localhost:3000/user/get/${id}`
        );
        console.log(response.data) ;
        setData(response.data);
        //setNotification(data.notificaitons) ;
        //setNotification(data.notifications); 

        if (response.data.isAdmin) {
          const otherResponse = await axios.get(
            `http://localhost:3000/course/getAll`
          );
          setOtherData(otherResponse.data);
          console.log(otherResponse.data) ;
        }
      } catch (error) {
        console.error(error);
      }
    }

    fetchData();
  }, []);

  /* useEffect(() => {
    if (data.isAdmin) {
      // Use initial data to fetch other data
      axios
        .get(``)
        .then((response) => setOtherData(response.data))
        .catch((error) => console.error(error));
    }
  }, [data]); */

  /* const { data, status } = useQuery(
    ["userone", "64578ad50ff5d69cbe16415a"],

    async ({ queryKey }) => {
      const id = queryKey[1];
      try {
        const res = await fetch(`http://localhost:3000/user/get/${id}`, {
          method: "GET",
        });
        const data = await res.json();
        //console.log(data.firstName);
        //console.log(data.notifications);
        setCourses(data.courses);
        setNotification(data.notifications);
        let userTypeHoler = {
          isAdmin: data.isAdmin,
          isTeacher: data.isTeacher,
          isStudent: data.isStudent,
        };
        setUserTyper(userTypeHoler);
        console.log(userTypeHoler, userType);
        return data;
      } catch (e) {
        console.log(e);
      }
    }
  ); */

  if (!data || !otherData) {
    return <div>loading...</div>;
  }

  let coursesHolder ; 
  if(data.courses.length>0) {
    coursesHolder = data.courses.map((Element) => Element.courseID)

  }

  let courses = otherData ? otherData : coursesHolder;
  //coursesHolder =
  /* setCourses() ; 
   ;  */
  console.log(coursesHolder)
  let userType = {
    isAdmin: data.isAdmin,
    isTeacher: data.isTeacher,
    isStudent: data.isStudent,
  };
  console.log(userType) ; 
  //setUserTyper(userTypeHoler);
  console.log(courses);
  let notification = data.notifications;
  console.log(notification) ; 

  //console.log(data, otherData);
  return (
    <propsContext.Provider
      value={{
        data,
        Indexhandle,
        notificationReaded,
        userType,
        searchMode,
        notification,
        courses,
        profileShown,
        setProfileShown,
      }}
    >
      <div className="flex w-full">
        <Sidebar />
        <Home index={Indexhandle[0]} />
        <Teacherannounce index={Indexhandle[0]} />
        <Teachercourses index={Indexhandle[0]} />
        <Assignment index={Indexhandle[0]} />
        <Quizzes index={Indexhandle[0]} />
        <Teacherstudents index={Indexhandle[0]} />
        <Teachers index={Indexhandle[0]} />
        <Schedule index={Indexhandle[0]} />
      </div>
    </propsContext.Provider>
  );
  /* setNotification(data.notifications);
    
    setCourses(data.courses) ; */
};

//notificaiton = data.notifications;

export default Mainapp;
