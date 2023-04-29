import React, { useContext } from "react";
import Search from "../../../components/reusable/Search";
import Addnewassignment from "../../../components/assignment/Addnewassignment";
import Activities from "../../../components/super/Activities";
import { IndexElementContext } from "../Assignment";
import Bluredbg from "../../../components/reusable/Bluredbg";
import { propsContext } from "../../Mainapp";
import SearchForm from "../../../components/super/SearchForm";

const Main = () => {
  const { editMode } = useContext(IndexElementContext);
  const {searchMode} = useContext(propsContext)
  function handleClick() {
    searchMode[0] ? searchMode[1](false) : searchMode[1](true);
  }
  return (
    <div className="relative flex basis-[60%] flex-col gap-4 bg-primary  p-8">
      {editMode[0] ? <Bluredbg /> : null}
      {searchMode[0] ? <Bluredbg type={"search"} /> : null}
      {searchMode[0] ? <SearchForm handleClick={handleClick} /> : null}

      <div className="relative z-10 flex justify-between">
        <h1 className="text-[25px]">Assignment</h1>
        {editMode[0] ? null : <Search handleClick={handleClick} />}
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
