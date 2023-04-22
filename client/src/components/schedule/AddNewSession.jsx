import React, { useContext, useState } from "react";
import Publish from "../../components/reusable/Publish";
import { calendarContext } from "../../content page/Schedule/src/Main";
import { calendar } from "../../content page/Schedule/content/main";
import { handleSubmit } from "./functions/HandleSubmit";
import DayPicker from "./DayPicker";

const AddNewSession = () => {
  const eventState = useContext(calendarContext);

  return (
    <div className="flex flex-col gap-4 rounded-[10px] bg-white p-4">
      <div>
        <h2 className="text-[1.25rem]">Add new Session</h2>
      </div>
      <form
        onSubmit={(e) => handleSubmit(e, eventState)}
        className="flex flex-col gap-2"
      >
        <div className="flex justify-between gap-[2%]">
          <div className=" flex basis-[49%] flex-col gap-4">
            <label htmlFor="groupe">
              <input
                name="groupe"
                placeholder="groupe"
                type="text"
                id="groupe"
              />
            </label>
            <label htmlFor="teacher name">
              <input
                name="teacher name"
                id="teacher name"
                type="text"
                placeholder="teacher name"
              />
            </label>
            <label htmlFor="pickColor">
              <input
                type="color"
                placeholder="pick color"
                id="pickColor"
                name="pickColor"
              />
            </label>
          </div>
          <div className="flex basis-[49%] gap-4">
            <div>
              <DayPicker />
            </div>
            <label htmlFor="starting time">
              <input
                className=""
                type="time"
                name="starting time"
                id="starting time"
              />
            </label>
            <label htmlFor="ending time">
              <input
                type="time"
                name="ending time"
                id="ending time"
                placeholder="ending time"
              />
            </label>
          </div>
        </div>
        <div className="flex justify-end">
          <Publish />
        </div>
      </form>
    </div>
  );
};

export default AddNewSession;
