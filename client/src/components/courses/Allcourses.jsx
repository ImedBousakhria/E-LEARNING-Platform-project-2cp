import React from "react";
import { useState, useContext, useEffect } from "react";
import { lessons } from "../../content page/Courses/content/main";
import { createContext } from "react";
import "swiper/swiper-bundle.css";
import "swiper/css";
import "swiper/css/navigation";
import darkarrow from "../../assets/icons/darkarrow.svg";
import arrow from "../../assets/icons/annouarrow.svg";
import Lesson from "./Lesson";
import Delete from "../reusable/Delete";
import { CoursesContext } from "../../content page/Courses/Teachercourses";
import axios from "axios";
import { formatDate } from "../reusableFunc/formatDate";
import { propsContext } from "../../content page/Mainapp";

const Allcourses = ({ index, admin }) => {
  const { userType } = useContext(propsContext)
  const [iconRotation, setIconRotation] = useState(0);
  const {
    activeCardIndex,
    setActiveCardIndex,
    barContent,
    setBarContent,
    checkedLessons,
    setCheckedLessons,
    editMode,
    courseId
  } = useContext(CoursesContext);

  // GET lessons
  const [My, setLessons] = useState([]);
  userType.isAdmin ? 
  useEffect(() => {
    const getLessons = async () => {
      try {
        const response = await axios.get("http://localhost:3000/lesson/getAll");
        setLessons(response.data);
        console.log(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    getLessons();
  }, []) : 
  // get by course ID
  useEffect(() => {
    const fetchLessons = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/lesson/get/${courseId}`);
        setLessons(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchLessons();
  }, [courseId]);

  const handleCheckAll = (event) => {
    const { checked } = event.target;
    const newCheckedLessons = {};

    if (checked) {
      lessons.forEach((e, index) => {
        newCheckedLessons[index] = true;
      });
    } else {
      lessons.forEach((e, index) => {
        newCheckedLessons[index] = false;
      });
    }
    setCheckedLessons(newCheckedLessons);
  };

  const handleIconClick = () => {
    setIconRotation(iconRotation + 90);
  };

  const postsPerPage = 4;
  const [currentPage, setCurrentPage] = useState(1);
  const lastPostIndex = currentPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;

  const currentPosts = My.slice(firstPostIndex, lastPostIndex);
  const isPrevDisabled = currentPage === 1;
  const isNextDisabled = lastPostIndex >= My.length;

  const handleNextClick = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const handlePrevClick = () => {
    setCurrentPage((prevPage) => prevPage - 1);
  };

  return (
    <div
      className={`
        ${editMode ? " pointer-events-none blur-sm filter" : ""}
          flex flex-col gap-4 rounded-[10px] bg-white py-6 px-8`}
    >
      <div className="flex items-center justify-between">
        <p className="mb-3 text-lg font-semibold text-nightblue">
          Your lessons
        </p>

        <div className="flex items-center gap-4">
          <button
            className={`${
              isPrevDisabled ? "opacity-50" : ""
            } rotate-180 cursor-pointer`}
            alt=""
            onClick={handlePrevClick}
            disabled={isPrevDisabled}
          >
            <img src={arrow} alt="" />
          </button>
          <button
            className={`${isNextDisabled ? "opacity-50" : ""} cursor-pointer`}
            onClick={handleNextClick}
            disabled={isNextDisabled}
          >
            <img src={arrow} alt="" />
          </button>
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <header className="flex items-center gap-3 py-2 px-4">
          <input
            type="checkbox"
            onChange={handleCheckAll}
            checked={
              Object.keys(checkedLessons).length === lessons.length &&
              Object.keys(checkedLessons).every((id) => checkedLessons[id])
            }
            className=" aspect-square h-3.5 w-3.5 max-w-max accent-accent"
          />

          <div className="flex basis-[100%] justify-between">
            <div
              className="flex flex-shrink-0 basis-[30%] cursor-pointer items-center gap-1 "
              onClick={handleIconClick}
            >
              <img src={darkarrow} alt="" />
              <small>Name</small>
            </div>
            <div
              className="flex basis-[30%] cursor-pointer items-center gap-1"
              onClick={handleIconClick}
            >
              <img src={darkarrow} alt="" />
              <small>Group</small>
            </div>

            <div
              className="flex flex-shrink-0 basis-[30%] cursor-pointer items-center gap-1"
              onClick={handleIconClick}
            >
              <img src={darkarrow} alt="" />
              <small>Date modified</small>
            </div>
            <div className=" ">
              {admin ? <Delete text="Delete" /> : null}
            </div>
          </div>
        </header>

        {currentPosts.map((lesson, index) => {
          return (
            <Lesson
              admin={true}
              id={index}
              name={lesson.title}
              type={lesson.type}
              course={lesson.course}
              date={formatDate(lesson.created)}
              onClick={() => {
                setActiveCardIndex(index);
                setBarContent(lesson);
              }}
              isActive={activeCardIndex === index && barContent !== null}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Allcourses;
