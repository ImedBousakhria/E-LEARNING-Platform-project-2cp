import React, { useContext } from "react";
import Search from "../../../components/reusable/Search";
import Activities from "../../../components/super/Activities";
import Addnewquiz from "../../../components/quizzes/Addnewquiz";
import { IndexElementContextquiz } from "../Quizzes";
import Bluredbg from "../../../components/reusable/Bluredbg";

const Main = () => {
  const { editMode } = useContext(IndexElementContextquiz);

  return (
    <div className="relative flex  basis-[60%] flex-col gap-4 bg-primary p-8">
      {editMode[0] ? <Bluredbg /> : null}
      <div className="z-10 flex justify-between">
        <h1 className="text-[25px]">Quizzes</h1>
        {editMode[0] ? null : <Search />}
      </div>

      <div className="flex flex-col gap-4">
        <div className="relative z-10">
          <Addnewquiz />
        </div>
        <Activities type={"quiz"} />
      </div>
    </div>
  );
};

export default Main;
