import React from "react";
import Search from "../../components/Search";
import Addnewassignment from "../../components/Addnewassignment";
import Teacherassignment from "../../components/Teacherassignment";

const Main = () => {
  return (
    <div className="flex basis-[60%] flex-col gap-4 bg-primary p-8">
      <div className="flex justify-between">
        <h1 className="text-[25px]">Assignment</h1>
        <Search />
      </div>
      <div>
        <Addnewassignment />
        <Teacherassignment />
      </div>
    </div>
  );
};

export default Main;
