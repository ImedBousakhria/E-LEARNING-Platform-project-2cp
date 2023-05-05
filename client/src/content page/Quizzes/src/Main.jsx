import React, { useContext } from "react";
import Search from "../../../components/reusable/Search";
import Activities from "../../../components/super/Activities";
import Addnewquiz from "../../../components/quizzes/Addnewquiz";
import { IndexElementContextquiz } from "../Quizzes";
import Bluredbg from "../../../components/reusable/Bluredbg";
import SearchForm from "../../../components/super/SearchForm";
import { propsContext } from "../../Mainapp";

const Main = () => {
  const { editMode } = useContext(IndexElementContextquiz);
  const {searchMode} = useContext(propsContext) ; 
  function handleClick() {
    searchMode[0] ? searchMode[1](false) : searchMode[1](true);
  }
  return (
    <div className="relative flex  basis-[60%] flex-col gap-4 bg-primary p-8">
      {editMode[0] ? <Bluredbg /> : null}
      {/* {searchMode[0] ? <Bluredbg type={"search"} /> : null}
      {searchMode[0] ? <SearchForm handleClick={handleClick} /> : null} */}
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
