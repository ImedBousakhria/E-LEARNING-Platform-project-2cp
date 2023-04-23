import React from "react";
import Search from "../../../components/reusable/Search";
import Newannounce from "../../../components/announcement/Newannounce";
import Allannouncements from "../../../components/announcement/Allannouncements";
import { useState, useContext, useRef } from "react";
import { AnnouncementContext } from "../Teacherannounce";

const Announcemain = () => {
  const [activeCardIndex, setActiveCardIndex] = useState();

  const { editMode } = useContext(AnnouncementContext);
  return (
    <div className="flex flex-shrink-0 basis-[60%] flex-col gap-6 bg-primary px-12 py-8 ">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-nightblue">Announcements</h1>
        <div
          className={` ${
            editMode ? " pointer-events-none blur-[2px] filter" : ""
          }`}
        >
          <Search />
        </div>
      </div>
      <div className="">
        <Newannounce setActiveCardIndex={setActiveCardIndex} />
      </div>
      <div>
        <Allannouncements
          activeCardIndex={activeCardIndex}
          setActiveCardIndex={setActiveCardIndex}
        />
      </div>
    </div>
  );
};

export default Announcemain;
