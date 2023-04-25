import React from "react";
import { useState } from "react";
import { students } from "./../../content page/Students/content/main";
import Studentelement from "./components/Studentelement";
import "swiper/swiper-bundle.css";
import "swiper/css";
import "swiper/css/navigation";
import { useContext } from "react";
import { StudentsContext } from "../../content page/Students/Teacherstudents";
import darkarrow from "../../assets/icons/darkarrow.svg";
import arrow from "../../assets/icons/annouarrow.svg";

const Allstudents = () => {
  const user = "said";
  const { barContent, setBarContent, activeCardIndex, setActiveCardIndex } =
    useContext(StudentsContext);
  const [iconRotation, setIconRotation] = useState(0);

  const handleIconClick = () => {
    setIconRotation(iconRotation + 90);
  };

  return (
    <div className={`flex flex-col gap-4 rounded-[10px] bg-white py-6 px-8`}>
      <div className="flex items-center justify-between">
        <p className="mb-3 text-lg font-semibold text-nightblue">
          Your students
        </p>

        <div className="flex items-center gap-4">
          <img src={arrow} className=" rotate-180" alt="" />
          <span className=" text-lg font-semibold text-accent">2CP</span>{" "}
          {/* iterate over groups */}
          <img src={arrow} alt="" />
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <header className="flex basis-[100%] justify-between p-2">
          <div
            className="flex cursor-pointer items-center gap-1 basis-[50%]"
            onClick={handleIconClick}
          >
            {" "}
            <img src={darkarrow} alt="" /> Name
          </div>
          <div className="flex cursor-pointer gap-1 basis-[50%]" onClick={handleIconClick}>
            <img src={darkarrow} alt="" /> Group
          </div>
        </header>
        {students.map((student, index) => {
          return (
            <Studentelement
              person={student.person}
              group={student.group}
              profilepicture={student.profilepicture}
              onClick={() => {
                setActiveCardIndex(index);
                setBarContent(student);
              }}
              isActive={activeCardIndex === index && barContent !== null}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Allstudents;
