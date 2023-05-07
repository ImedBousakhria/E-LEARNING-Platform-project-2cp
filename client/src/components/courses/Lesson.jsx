import React, { useContext } from "react";
import file from "../../assets/icons/file.svg";
import folder from "../../assets/icons/folder.svg";
import img from "../../assets/icons/img.svg";
import vid from "../../assets/icons/vid.svg";
import Delete from "../reusable/Delete";
import Edit from "../reusable/Edit";
import { CoursesContext } from "../../content page/Courses/Teachercourses";
import Message from "../reusable/Message";

const Lesson = ({ id, name, type, course, date, onClick, isActive, admin }) => {
  const {
    checkedLessons,
    setCheckedLessons,
    setContent,
    content,
    setEditMode,
    showDiscussion,
    setType

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


  function handleClick() {
    if (showDiscussion[0] == "hidden") {
      showDiscussion[1]("block");
    } else {
      showDiscussion[1]("hidden");
    }
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
     flex h-max cursor-pointer items-center gap-3 rounded-[10px] py-2 px-4`}
      onClick={onClick}
    >
      <input
        onClick={(e) => e.stopPropagation()}
        checked={checkedLessons[id]}
        onChange={handleCheckboxChange}
        type="checkbox"
        className=" aspect-square h-3.5 w-3.5 max-w-max accent-accent"
      />

      <div className=" flex basis-[100%] justify-between">
        <div className={`flex flex-shrink-0 basis-[30%] items-center gap-1 `}>
          <img src={icon} alt="" />
          <p className="truncate text-base">{name}</p>
        </div>

        <p
          className={`flex flex-shrink-0 basis-[30%] items-center text-base text-gray ${
            isActive ? " text-white opacity-70" : ""
          }`}
        >
          <span className="max-w-[4ch] overflow-hidden">

          {course}
          </span>
        </p>

        <p
          className={`flex flex-shrink-0 items-center text-base text-gray  basis-[30%]${
            isActive ? " text-white opacity-70" : ""
          }`}
        >
          {date}
        </p>

        <div className="flex gap-1 items-center">
          <div className="z-20">
            <Message
            handleClick={() => {
              handleClick();
            }}
          />
          </div>
          
          {
            admin ? <><Delete />
          <div
            onClick={() => {
              // setType to lesson
              setType('lesson')
              setEditMode(true);
              setContent((prevContent) => ({
                ...prevContent,
                description: 'desc',
              }));
              console.log(content);
            }}
          >
            <Edit />
          </div></> : null
          }
          
        </div>
      </div>
    </div>
  );
};

export default Lesson;
