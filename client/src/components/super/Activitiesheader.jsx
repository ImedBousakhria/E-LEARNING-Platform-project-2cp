import React from "react";
import { headers } from "../../content page/Assignment/content/main";
import Activitiesheaderelement from "../super elements/Activitiesheaderelement";
import Deleteassignment from "../reusable/Deleteactivitieselemnt";
import { studentHeader } from "../../content page/Home/content/main";

const Activitiesheader = ({ setCheckall, type }) => {
  var header;
  console.log(type) 
  if (type == ("students"|| "studentshome")) {
    header = studentHeader;
    console.log(header); 

  } else {
    header = headers;
    console.log(header) ; 
  }
  return (
    <div className="flex justify-between gap-4 px-[15px]">
      {type != "students" || "studentshome" ? (
        <button>
          <input
            type="checkbox"
            onClick={setCheckall}
            className="cursor-pointer"
          />
        </button>
      ) : null}

      <div className="grid-row-1 grid basis-[80%] grid-cols-3 gap-[2rem] ">
        {header.map((Element) => {
          return <Activitiesheaderelement title={Element.title} type={type} />;
        })}
      </div>
      <div className="flex basis-[15%] justify-center">
        {type != "students"||"studentshome" ? <Deleteassignment text={"Delete"} /> : null}
      </div>
    </div>
  );
};

export default Activitiesheader;
