import React, { useContext, useEffect } from "react";
import { calendar } from "../../content page/Schedule/content/main";
import { calendarContext } from "../../content page/Schedule/src/Main";
import { renderEvents } from "./functions/RenderEvents";

const Calendar = () => {
  const eventState = useContext(calendarContext) ; 
  useEffect(()=> {renderEvents(eventState[0])},[eventState[0]]) ;  
  return (
    <div className="flex flex-col gap-4 rounded-[10px] bg-white p-4">
      <div>
        <h2 className="text-[1.25rem]">The school's schedule</h2>
      </div>
      <table>
        <thead>
          <tr>
            <th></th>
            <th>Saturday</th>
            <th>Sunday</th>
            <th>Monday</th>
            <th>Tuesday</th>
            <th>Wednesday</th>
            <th>Thursday</th>
          </tr>
        </thead>
        <tbody>
          {calendar.map((element, index) => {
            return (
              <tr className="text-center">
                <td >{element}</td>
                <td className="bg-primary" id={"saturday" + index}></td>
                <td className="bg-primary" id={"sunday" + index}></td>
                <td className="bg-primary" id={"monday" + index}></td>
                <td className="bg-primary" id={"tuesday" + index}></td>
                <td className="bg-primary" id={"wednesday" + index}></td>
                <td className="bg-primary" id={"thursday" + index}></td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Calendar;
