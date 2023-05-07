import React, { useContext, useRef, useState } from "react";
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
import { homeContext } from "../../../content page/Home/Home";

const Schedule = () => {
  const [index, setIndex] = useState(0);
  const [selected, setSelected] = useState(0);
  const swiperRef = useRef(null);

  const {schedules} = useContext(homeContext) ; 

  return (
    <div className="flex basis-[40%]  flex-col gap-4 rounded-[10px] bg-white p-4">
      <div>
        <h2 className="text-[1.25rem]">Schedule</h2>
      </div>
      <div className="relative flex flex-col gap-4">
        <div className="max-w-[20rem]">
          <Swiper
            spaceBetween={0}
            slidesPerView={4}
            /* loop={true}
            autoplay={{
              delay: 2500,
            }} */
            /* modules={[Autoplay]} */
            onSwiper={(swiper) => {
              swiperRef.current = swiper;
              console.log(swiper);
            }}
          >
            <button
              className="absolute z-50 top-[40%]  "
              onClick={() => swiperRef.current.slidePrev()}
            >
              <img src={slideleft} />
            </button>
            {teacherschedule.map((Element, index) => {
              return (
                <SwiperSlide key={index}>
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
            <button
              className="absolute z-50 -right-[0%] top-[40%]"
              onClick={() => swiperRef.current.slideNext()}
            >
              <img src={slideright} />
            </button>
          </Swiper>
        </div>

        <div className="flex flex-col gap-4">
          {schedules[index]?.map((Element) => {
            return (
              <Course
                group={Element.group}
                //module={Element.module}
                startTime={Element.startTime}
                endTime={Element.endTime}
              />
             );
          })} 
        </div>
      </div>
    </div>
  );
};

export default Schedule;
