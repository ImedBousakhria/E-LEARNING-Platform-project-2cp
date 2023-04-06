import React from "react";
import { headers } from "../content page/Assignment/content/main";
import Assignmentheaderelement from "./Assignmentheaderelement";
import Deleteassignment from "./Deleteassignment";

const Assignmentheader = ({setCheckall}) => {
  return (
    <div className="flex gap-4 justify-between px-[15px]">
      <button>
        <input type="checkbox" onClick={setCheckall} className="cursor-pointer" />
      </button>
      <div className="grid-cols-3 grid gap-[2rem] grid-row-1 basis-[80%] ">
        {headers.map((Element) => {
          return <Assignmentheaderelement title={Element.title} />;
        })}
      </div>
      <div className="basis-[15%] flex justify-center">
        <Deleteassignment text={"Delete"} />
      </div>
    </div>
  );
};

export default Assignmentheader;
