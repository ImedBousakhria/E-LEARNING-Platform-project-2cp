import React, { useState } from "react";
import { teacherschedule } from "../../../content page/Home/content/schedule";
import Day from "./Day";
import Course from "./Course";
import slideleft from "../../../assets/icons/slideleft.svg";
import slideright from "../../../assets/icons/slideright.svg";
import { Swiper, SwiperSlide } from "swiper/react";
import { register } from "swiper/element/bundle";

register();
import "swiper/css";
import "swiper/css/navigation";

const Schedule = () => {
  const [index, setIndex] = useState(0);
  const [selected, setSelected] = useState(0);

  return (
    <div className="flex basis-[40%]  flex-col gap-4 rounded-[10px] bg-white p-4">
      <div>
        <h2 className="text-[1.25rem]">Schedule</h2>
      </div>
      <div className="flex flex-col gap-4">
        <div className="max-w-[20rem]">
          <Swiper spaceBetween={0} slidesPerView={4} navigation>
            {teacherschedule.map((Element, index) => {
              return (
                <SwiperSlide>
                  <Day
                    index={index}
                    date={Element.date}
                    text={Element.short}
                    handleclick={() => {
                      setIndex(index);
                      setSelected(index);
                    }}
                    select={selected}
                  />
                </SwiperSlide>
              );
            })}
          </Swiper>
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
