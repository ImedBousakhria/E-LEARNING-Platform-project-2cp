import React, { useState } from "react";
import Activitiesheader from "./Activitiesheader";
import Activitiesbody from "./Activitiesbody";

const Teacherassignment = ({ type }) => {
  const [checkall, setCheckall] = useState(false);

  return (
    <div className="flex flex-col gap-4 rounded-[10px] bg-white p-4">
      <div>
        <h2 className="text-[1.25rem]">Your {type}</h2>
      </div>
      <div className="flex flex-col gap-4">
        <Activitiesheader
          setCheckall={() =>
            checkall ? setCheckall(false) : setCheckall(true)
          }
        />
        <Activitiesbody type={type} checkall={checkall} />
      </div>
    </div>
  );
};

export default Teacherassignment;
