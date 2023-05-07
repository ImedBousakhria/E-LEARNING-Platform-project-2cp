import React, { useContext, useState } from "react";
import Activitiesheader from "./Activitiesheader";
import Activitiesbody from "./Activitiesbody";
import { propsContext } from "../../content page/Mainapp";

const Activities = ({ type }) => {
  const [checkall, setCheckall] = useState(false);

  console.log(type) ; 
  const {userType} = useContext(propsContext) ; 

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
          type={type}
        />
        <Activitiesbody type={type} checkall={checkall} />
      </div>
    </div>
  );
};

export default Activities;
