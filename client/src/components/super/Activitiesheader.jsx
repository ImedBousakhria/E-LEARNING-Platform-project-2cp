import React from "react";
import { headers } from "../../content page/Assignment/content/main";
import Activitiesheaderelement from "../super elements/Activitiesheaderelement";
import Deleteassignment from "../reusable/Deleteactivitieselemnt";
import { studentHeader } from "../../content page/Home/content/main";

const Activitiesheader = ({ setCheckall, type }) => {
  var header;
  if (type == "students") {
    header = studentHeader;
  } else {
    header = headers;
  }
  return (
    <div className="flex justify-between gap-4 px-[15px]">
      {type != "students" ? (
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
          return <Activitiesheaderelement title={Element.title} />;
        })}
      </div>
      <div className="flex basis-[15%] justify-center">
        {type != "students" ? <Deleteassignment text={"Delete"} /> : null}
      </div>
    </div>
  );
};

export default Activitiesheader;
