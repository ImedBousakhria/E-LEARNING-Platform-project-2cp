import React, { useContext } from "react";
import Search from "../../../components/reusable/Search";
import Addnewassignment from "../../../components/Addnewassignment";
import Activities from "../../../components/super/Activities";
import { IndexElementContext } from "../Assignment";

const Main = () => {
  const {editMode} = useContext(IndexElementContext) ; 
  return (
    <div className="relative flex basis-[60%] flex-col gap-4 bg-primary  p-8">
      {editMode[0] ? (
        <div className="absolute top-0 opacity-80 right-0 left-0 bottom-0 z-10 bg-darkgray blur-[2px]"></div>
      ) : null}

      <div className="relative z-10 flex justify-between">
        <h1 className="text-[25px]">Assignment</h1>
        {editMode[0] ? null : <Search />}
      </div>
      <div className=" flex flex-col gap-4">
        <div className="relative z-10">
          <Addnewassignment />
        </div>
        <Activities type={"assignment"} />
      </div>
    </div>
  );
};

export default Main;
