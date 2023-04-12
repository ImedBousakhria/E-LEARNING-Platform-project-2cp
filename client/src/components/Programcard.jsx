import React, { useState } from "react";

const Programcard = ({ name, icon, colors, type, time, id }) => {


  function handleMouseEnter() {
    document.querySelectorAll(".shape")[id].classList.remove("clippoly") ;
  }

  function handleMouseLeave() {
    document.querySelectorAll('.shape')[id].classList.add('clippoly') ; 
  }


  return (
    <div
      className="hi relative -z-0 mx-auto max-h-[260px] w-[260px] overflow-hidden rounded-[10px] hover:bg-black"
      style={{ backgroundColor: colors[0] }}
    >
      <div
        className="flex flex-col justify-center gap-6 transition-transform duration-300 ease-in-out hover:-translate-y-[20%] hover:gap-0  "
        onMouseEnter={() => handleMouseEnter()}
        onMouseLeave={() => handleMouseLeave()}
      >
        <div className="flex flex-col items-center justify-center gap-8 p-5">
          <div className="flex flex-col items-center justify-center gap-8">
            <div
              className="aspect-square   w-[138px] overflow-hidden rounded-[50%] border-[6px] border-white "
              style={{ backgroundColor: colors[1] }}
            >
              <img className="w-full object-cover" src={icon} />
            </div>
            <div>
              <p className="font-bold text-white">{name}</p>
            </div>
          </div>
        </div>

        <div className="flex  justify-center gap-[2rem] text-center font-bold text-white">
          <div
            className="aspect-square w-[79px]  rounded-[50%] text-center "
            style={{ backgroundColor: colors[0] }}
          >
            <p>{time[0]}</p>
            <p>D/W</p>
          </div>
          <div
            className="aspect-square w-[79px]  rounded-[50%] text-center "
            style={{ backgroundColor: colors[0] }}
          >
            <p>{time[1]}</p>
            <p>Weeks</p>
          </div>
        </div>
      </div>

      <div
        className={` shape clippoly absolute top-0 bottom-0 left-0 right-0 -z-10   `}
        style={{ backgroundColor: colors[1] }}
      ></div>
    </div>
  );
};

export default Programcard;
