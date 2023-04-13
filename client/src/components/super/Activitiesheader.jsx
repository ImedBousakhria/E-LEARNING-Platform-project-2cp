import React from "react";
import { headers } from "../../content page/Assignment/content/main";
import Activitiesheaderelement from "../super elements/Activitiesheaderelement";
import Deleteassignment from "../reusable/Deleteactivitieselemnt";

const Activitiesheader = ({ setCheckall }) => {
  return (
    <div className="flex justify-between gap-4 px-[15px]">
      <button>
        <input
          type="checkbox"
          onClick={setCheckall}
          className="cursor-pointer"
        />
      </button>
      <div className="grid-row-1 grid basis-[80%] grid-cols-3 gap-[2rem] ">
        {headers.map((Element) => {
          return <Activitiesheaderelement title={Element.title} />;
        })}
      </div>
      <div className="flex basis-[15%] justify-center">
        <Deleteassignment text={"Delete"} />
      </div>
    </div>
  );
};

export default Activitiesheader;
