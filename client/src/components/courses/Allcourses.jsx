import React from "react";
import { useState, useContext } from "react";
import { lessons } from "../../content page/Courses/content/main";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation } from "swiper";
import "swiper/swiper-bundle.css";
import "swiper/css";
import "swiper/css/navigation";
import darkarrow from "../../assets/icons/darkarrow.svg";
import arrow from "../../assets/icons/annouarrow.svg";
import Lesson from "./Lesson";
import Delete from "../reusable/Delete";
import { CoursesContext } from "../../content page/Courses/Teachercourses";

const Allcourses = ({index}) => {
  const [iconRotation, setIconRotation] = useState(0);

  const {
    activeCardIndex,
    setActiveCardIndex,
    barContent,
    setBarContent,
    checkedLessons,
    setCheckedLessons,
    editMode,
  } = useContext(CoursesContext);

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

  const isAllchecked = Object.values(checkedLessons).every(Boolean);
  const handleIconClick = () => {
    setIconRotation(iconRotation + 90);
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
          <img src={arrow} className=" rotate-180" alt="" />
          <img src={arrow} alt="" />
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <header className="flex items-center gap-3 py-2 px-4">
            <input
              type="checkbox"
              onChange={handleCheckAll}
              checked={
                Object.keys(checkedLessons).length === lessons.length &&
                Object.keys(checkedLessons).every((id) => checkedLessons[id] )
                        }
              className=" aspect-square h-3.5 w-3.5 max-w-max accent-accent"
            /> 
          
          <div className="flex justify-between basis-[100%]">
            <div
              className="flex flex-shrink-0 cursor-pointer items-center gap-1 basis-[30%] "
              onClick={handleIconClick}
            >
              <img src={darkarrow} alt="" />
              <small>Name</small>
            </div>
            <div
              className="flex cursor-pointer items-center gap-1 basis-[30%]"
              onClick={handleIconClick}
            >
              <img src={darkarrow} alt="" />
              <small>Group</small>
            </div>

            <div
              className="flex cursor-pointer flex-shrink-0 items-center gap-1 basis-[30%]"
              onClick={handleIconClick}
            >
              <img src={darkarrow} alt="" />
              <small>Date modified</small>
            </div>
            <div className=" ">
              <Delete text="Delete" />
            </div>
            
          </div>
        </header>

        {lessons.map((lesson, index) => {
          return (
            <Lesson
              id={index}
              name={lesson.name}
              type={lesson.type}
              course={lesson.course}
              date={lesson.date}
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
