import React from "react";
import Search from "../../../components/reusable/Search";
import Addnewassignment from "../../../components/Addnewassignment";
import Activities from "../../../components/super/Activities";

const Main = () => {
  return (
    <div className="flex basis-[60%] flex-col gap-4 bg-primary p-8">
      <div className="flex justify-between">
        <h1 className="text-[25px]">Assignment</h1>
        <Search />
      </div>
      <div className="flex flex-col gap-4">
        <Addnewassignment />
        <Activities type={"assignment"} />
      </div>
    </div>
  );
};

export default Main;
