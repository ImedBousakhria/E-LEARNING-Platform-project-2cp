import React from "react";
import Search from "../../../components/reusable/Search";
import Newteacher from "../../../components/teachers/Newteacher";
import Allteachers from "../../../components/teachers/Allteachers";

const Main = () => {
  return (
    <div className="flex flex-shrink-0 basis-[60%] flex-col gap-6 bg-primary px-12 py-8 min-h-screen">
      <div className="mb-8 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-nightblue">Teachers</h1>
        <Search />
      </div>
      <Newteacher/>
      <Allteachers />
    </div>
  );
};
export default Main;
