import React from "react";
import Search from "../../../components/reusable/Search";
import Newannounce from "../../../components/announcement/Newannounce";
import Allannouncements from "../../../components/announcement/Allannouncements";
import { useState, useContext, useRef } from "react";
import { AnnouncementContext } from "../Teacherannounce";
import { propsContext } from "../../Mainapp";

const Announcemain = () => {
  const [activeCardIndex, setActiveCardIndex] = useState();
  const { data, userType } = useContext(propsContext);
  const { editMode } = useContext(AnnouncementContext);
  return (
    <div className="flex flex-shrink-0 basis-[60%] flex-col gap-6 bg-primary px-12 py-8 ">
      <div className="flex items-center justify-between">
        <h1
          className="text-2xl font-bold text-nightblue"
          onClick={console.log(data)}
        >
          Announcements
        </h1>
        <div
          className={` ${
            editMode ? " pointer-events-none blur-[2px] filter" : ""
          }`}
        >
          <Search />
        </div>
      </div>
      {userType.isAdmin || userType.isTeacher ? (
        <Newannounce setActiveCardIndex={setActiveCardIndex} />
      ) : null}

      <Allannouncements
        activeCardIndex={activeCardIndex}
        setActiveCardIndex={setActiveCardIndex}
      />
    </div>
  );
};

export default Announcemain;
