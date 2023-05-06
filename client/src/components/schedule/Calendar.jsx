import React, { useContext, useEffect } from "react";
import { calendar } from "../../content page/Schedule/content/main";
import { scheduleContext } from "../../content page/Schedule/Schedule";
import { renderEvents } from "./functions/RenderEvents";
import { calendarContext } from "../../content page/Schedule/src/Main";
import { propsContext } from "../../content page/Mainapp";


const Calendar = () => {
  const {courses} = useContext(propsContext) ; 
  const { schedules } = useContext(scheduleContext); ; 
  const {elementIndex} = useContext(scheduleContext) ;
  const {RenderTriger} = useContext(calendarContext)


  useEffect(() => {
    renderEvents(schedules);
    console.log("hello");
  }, [courses, RenderTriger[0]]);  

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
                <td>{element}</td>
                <td className="bg-primary" id={"saturday" + index}>
                  <div
                    onClick={() =>
                      elementIndex[1](
                        document.getElementById("saturday" + index).key
                      )
                    }
                  ></div>
                </td>
                <td className="bg-primary" id={"sunday" + index}>
                  <div
                    onClick={() =>{
                      console.log(document.getElementById("sunday"+index).key)
                      elementIndex[1](document.getElementById("sunday"+index).key) ; 
                    }}
                  ></div>
                </td>
                <td className="bg-primary" id={"monday" + index}>
                  <div
                    onClick={() =>
                      elementIndex[1](document.getElementById("monday" + index).key)
                    }
                  ></div>
                </td>
                <td className="bg-primary" id={"tuesday" + index}>
                  <div
                    onClick={() =>
                      elementIndex[1](
                        document.getElementById("tuesday" + index).key
                      )
                    }
                  ></div>
                </td>
                <td className="bg-primary" id={"wednesday" + index}>
                  <div
                    onClick={() =>
                      elementIndex[1](
                        document.getElementById("wednesday" + index).key
                      )
                    }
                  ></div>
                </td>
                <td className="bg-primary" id={"thursday" + index}>
                  <div
                    onClick={() =>
                      elementIndex[1](
                        document.getElementById("thursday" + index).key
                      )
                    }
                  ></div>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Calendar;
