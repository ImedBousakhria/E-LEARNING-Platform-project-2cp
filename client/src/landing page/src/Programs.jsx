import React from "react";
import rightarrowblack from "./../../assets/icons/rightarrowblack.svg";
import Programcard from "../../components/landing/Programcard";
import { programs } from "../content/pograms";
// import function to register Swiper custom elements
import {  register } from 'swiper/element/bundle';
import {Swiper, SwiperSlide} from 'swiper/react'
import { Navigation } from "swiper";
// register Swiper custom elements
register();
import 'swiper/css'
import "swiper/css/navigation";

const Programs = () => {
  return (
    <div id="Programs">
      <div className=" flex  flex-col gap-8">
        <section className="flex items-center mx-auto w-full max-w-[1280px] justify-between">
          <h2>Our programs</h2>
          <a className="flex gap-2">
            <span className="font-bold">See all</span>
            <img src={rightarrowblack} />
          </a>
        </section>
        <section className="px-8">
          <Swiper
            spaceBetween={0}
            slidesPerView={4}
            navigation
          >
            {programs.map((Element, index) => {
              return (
                <SwiperSlide>
                  <Programcard
                    id={index}
                    name={Element.name}
                    icon={Element.icon}
                    colors={Element.colors}
                    time={Element.time}
                  />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </section>
      </div>
    </div>
  );
};

export default Programs;
