import React from "react";
import Search from "../../../components/reusable/Search";
import Allstudents from "../../../components/students/Allstudents";

const Studentsmain = () => {
  return (
    <div className="flex flex-shrink-0 basis-[60%] flex-col gap-6 bg-primary px-8 py-4 min-h-screen">
      <div className="mb-8 flex justify-between">
        <h1 className="text-2xl font-bold text-nightblue">Students</h1>

        <Search />
      </div>
      <Allstudents />
    </div>
  );
};

export default Studentsmain;
