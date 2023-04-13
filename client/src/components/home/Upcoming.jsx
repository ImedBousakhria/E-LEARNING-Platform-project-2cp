import React from "react";
import Upcomingelements from "./homeelements/Upcomingelements";
import { upcomings } from "../../content page/Home/content/notification";

const Upcoming = () => {
  return (
    <div className="flex flex-col gap-8">
      <h2 className="text-[1.25rem]">Upcoming</h2>
      <div className="flex flex-col gap-4">
        {upcomings.map((Element) => {
          return (
            <Upcomingelements
              title={Element.title}
              time={Element.time}
              description={Element.description}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Upcoming;
