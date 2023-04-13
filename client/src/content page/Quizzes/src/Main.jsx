import React from "react";
import Search from "../../../components/reusable/Search";
import Activities from "../../../components/super/Activities";
import Addnewquiz from "../../../components/quizzes/Addnewquiz";

const Main = () => {
  return (
    <div className="flex basis-[60%] flex-col gap-4 bg-primary p-8">
      <div className="flex justify-between">
        <h1 className="text-[25px]">Quizzes</h1>
        <Search />
      </div>
      <div className="flex flex-col gap-4">
        <Addnewquiz />
        <Activities type={"quiz"} />
      </div>
    </div>
  );
};

export default Main;
