import React, { useState } from "react";
import { teacherschedule } from "../teacher/content/schedule";
import Day from "./Day";
import Course from "./Course";
import slideleft from "../assets/icons/slideleft.svg";
import slideright from "../assets/icons/slideright.svg";

const Schedule = () => {
  const [index, setIndex] = useState(0);

  function handleslide(direction) {
    direction == "right"
      ? (document.querySelector(".dayscontainer").scrollLeft +=
          document.querySelector(".day").clientWidth)
      : (document.querySelector(".dayscontainer").scrollLeft -=
          document.querySelector(".day").clientWidth);
  }

  return (
    <div className="flex basis-[40%]  flex-col gap-4 rounded-[10px] bg-white p-4">
      <div>
        <h2 className="text-[1.25rem]">Schedule</h2>
      </div>
      <div className="flex flex-col gap-4">
        <div className="flex  gap-2 ">
          <button onClick={() => handleslide("left")}>
            <img src={slideleft} />
          </button>
          <div className="dayscontainer flex gap-[4%] overflow-hidden ">
            {teacherschedule.map((Element, index) => {
              return (
                <Day
                  key={index}
                  date={Element.date}
                  text={Element.short}
                  handleclick={() => setIndex(index)}
                />
              );
            })}
          </div>

          <button onClick={() => handleslide("right")}>
            <img src={slideright} />
          </button>
        </div>
        <div className="flex flex-col gap-4">
          {teacherschedule[index].modules.map((Element) => {
            return (
              <Course
                groupe={Element.groupe}
                module={Element.module}
                time={Element.time}
                description={Element.description}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Schedule;
