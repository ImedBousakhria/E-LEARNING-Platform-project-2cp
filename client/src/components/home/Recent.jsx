import React from "react";
import { recent } from "../../content page/Home/content/notification";
import Recentelement from "./homeelements/Recentelement";

const Recent = () => {
  return (
    <div className="flex flex-col gap-8">
      <div>
        <h2 className="text-[1.25rem]">Recent Activities</h2>
      </div>
      <div className="flex flex-col gap-4">
        {recent.map((Element) => {
          return <Recentelement type={Element.type} date={Element.date} />;
        })}
      </div>
    </div>
  );
};

export default Recent;
