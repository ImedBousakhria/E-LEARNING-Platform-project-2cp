import React, { createContext, useContext, useState } from "react";
import Search from "../../../components/reusable/Search";
import AddNewSession from "../../../components/schedule/AddNewSession";
import Calendar from "../../../components/schedule/Calendar";
import { propsContext } from "../../Mainapp";
import SearchForm from "../../../components/super/SearchForm";
import Bluredbg from "../../../components/reusable/Bluredbg";

export const calendarContext = createContext();

const Main = () => {
  const RenderTriger = useState(0) ; 
  const {searchMode} = useContext(propsContext) ; 
  /* function handleClick() {
    searchMode[0] ? searchMode[1](false) : searchMode[1](true);
  } */
  return (
    <calendarContext.Provider value={{ RenderTriger }}>
      <div className="relative flex basis-[60%] flex-col gap-4 bg-primary  p-8">
        {/* {searchMode[0] ? <Bluredbg type={"search"} /> : null}
        {searchMode[0] ? <SearchForm handleClick={handleClick} /> : null} */}
        <div className="flex justify-between">
          <h1 className="text-[25px]">Schedule</h1>
          <Search />
        </div>
        <div className="flex flex-col gap-4">
          <Calendar />
          <AddNewSession />
        </div>
      </div>
    </calendarContext.Provider>
  );
};

export default Main;
