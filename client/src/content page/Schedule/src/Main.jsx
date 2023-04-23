import React, { createContext, useContext, useState } from "react";
import Search from "../../../components/reusable/Search";
import AddNewSession from "../../../components/schedule/AddNewSession";
import Calendar from "../../../components/schedule/Calendar";

export const calendarContext = createContext();

const Main = () => {
  return (
    <div className="relative flex basis-[60%] flex-col gap-4 bg-primary  p-8">
      <div className="flex justify-between">
        <h1 className="text-[25px]">Schedule</h1>
        <Search />
      </div>
      <div className="flex flex-col gap-4">
        <Calendar />
        <AddNewSession />
      </div>
    </div>
  );
};

export default Main;
