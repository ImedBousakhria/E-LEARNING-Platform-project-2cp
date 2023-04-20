import React from "react";
import { recent } from "../teacher/content/notification"
import Recentsubelem from "./Recentsubelem";
import arrow from "../assets/icons/Annouarrow.svg"

const Recentsub = () => {
  return (
    <div className="flex flex-col gap-8">
      <div className="flex justify-between items-center">
        <p className="text-xl whitespace-nowrap font-semibold">Recent submissions</p>
        <div className="flex gap-3">
            <img src={arrow} alt="" className=" rotate-180" />
            <img src={arrow} alt="" />
        </div>
        
      </div>
      <div className="flex flex-col gap-4">
        {
          recent.map((Element) => {
            return(
              <Recentsubelem type={Element.type} date={Element.date} />
            )
          })
        }
      </div>
    </div>
  );
};

export default Recentsub;
