import React, { useContext } from "react";
import file from "../../assets/icons/file.svg";
import folder from "../../assets/icons/folder.svg";
import img from "../../assets/icons/img.svg";
import vid from "../../assets/icons/vid.svg";
import Delete from "../reusable/Delete";
import Edit from "../reusable/Edit";
import { CoursesContext } from "../../content page/Courses/Teachercourses";

const Lesson = ({ id, name, type, course, date, onClick, isActive }) => {
  const {
    checkedLessons,
    setCheckedLessons,
    setContent,
    content,
    setEditMode,
  } = useContext(CoursesContext);
  let icon;
  if (type == "file") {
    icon = file;
  } else if (type == "folder") {
    icon = folder;
  } else if (type == "image") {
    icon = img;
  } else if (type == "video") {
    icon = vid;
  }

  const handleCheckboxChange = (event) => {
    const { checked } = event.target;
    const newCheckedLessons = { ...checkedLessons, [id]: checked };
    setCheckedLessons(newCheckedLessons);
  };

  return (
    <div
      className={`
    ${isActive ? " bg-darkgray" : " bg-assignmentbg"}
     flex h-max min-w-max cursor-pointer items-center justify-between rounded-[10px] py-2 px-4`}
      onClick={onClick}
    >
      <div className=" flex flex-shrink-0 items-center gap-3.5 ">
        <input
          onClick={(e) => e.stopPropagation()}
          checked={checkedLessons[id]}
          onChange={handleCheckboxChange}
          type="checkbox"
          className=" aspect-square h-3.5 w-3.5 max-w-max accent-accent"
        />

        <img src={icon} />
        <p>{name}</p>
      </div>
      <p
        className={`flex flex-shrink-0 items-center gap-3 text-base text-gray ${
          isActive ? " text-white opacity-80" : ""
        }`}
      >
        <span className=" text-xl font-extralight">|</span>
        {course}
      </p>

      <p
        className={`flex flex-shrink-0 items-center gap-3 text-base text-gray ${
          isActive ? " text-white opacity-70" : ""
        }`}
      >
        <span className=" text-xl font-extralight">|</span>
        {date}
      </p>

      <div className="flex gap-1">
        <Delete />
        <div
          onClick={() => {
            setEditMode(true);
            setContent((prevContent) => ({
              ...prevContent,
              description: "hahaha",
            }));
            console.log(content);
          }}
        >
          <Edit />
        </div>
      </div>
    </div>
  );
};

export default Lesson;
