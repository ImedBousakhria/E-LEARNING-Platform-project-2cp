import React from "react";
import { assignmentteacher } from "../../content page/Assignment/content/main";
import Activitiesbodyelement from "../super elements/Activitiesbodyelement";

const Activitiesbody = ({ checkall, setSelected, type }) => {
  return (
    <div className="flex flex-col gap-2">
      {assignmentteacher.map((Element, index) => {
        return (
          <Activitiesbodyelement
            type={type}
            index={index + 1}
            checkall={checkall}
            name={Element.name}
            groupe={Element.groupe}
            date={Element.date}
          />
        );
      })}
    </div>
  );
};

export default Activitiesbody;
