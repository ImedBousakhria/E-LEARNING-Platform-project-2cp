import React from "react";
import { useState, useContext } from "react";
import { lessons } from "../teacher/content/main";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation } from "swiper";
import "swiper/swiper-bundle.css";
import "swiper/css";
import "swiper/css/navigation";
import darkarrow from "../assets/icons/darkarrow.svg";
import arrow from "../assets/icons/annouarrow.svg";
import Lesson from "./lesson";
import Delete from "./Delete";
import { CoursesContext } from "../teacher/Teachercourses";

const Allcourses = () => {
  const [iconRotation, setIconRotation] = useState(0);

  const {
    activeCardIndex,
    setActiveCardIndex,
    barContent,
    setBarContent,
    checkedLessons,
    setCheckedLessons,
    editMode
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
        ${editMode
          ? " pointer-events-none blur-sm filter"
          : ""}
          flex flex-col gap-4 rounded-[10px] bg-white py-6 px-8`
      }
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
        <header className="flex items-center justify-between py-2 pl-4 pr-2">
          <div className=" flex basis-[25%] items-center gap-3">
            <input
              type="checkbox"
              onChange={handleCheckAll}
              checked={
                Object.keys(checkedLessons).length === lessons.length &&
                Object.keys(checkedLessons).every((id) => checkedLessons[id])
              }
              className=" aspect-square h-3.5 w-3.5 max-w-max accent-accent"
            />
            <div
              className="flex cursor-pointer items-center gap-1 "
              onClick={handleIconClick}
            >
              <img src={darkarrow} alt="" /> Name
            </div>
          </div>

          <div
            className="flex cursor-pointer items-center gap-1"
            onClick={handleIconClick}
          >
            <img src={darkarrow} alt="" /> Group
          </div>
          <div
            className="flex cursor-pointer flex-wrap items-center gap-1 "
            onClick={handleIconClick}
          >
            <img src={darkarrow} alt="" /> Date modified
          </div>
          <Delete text="Delete" />
        </header>

        <div className="flex flex-col gap-2">
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
    </div>
  );
};

export default Allcourses;
