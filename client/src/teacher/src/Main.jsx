import React from "react";
import Search from "../../components/Search";
import { adds } from "../content/main";
import Add from "../../components/Add";
import Lastsubmisstions from "../../components/Lastsubmisstions";
import Announcement from "../../components/Announcement";
import Schedule from "../../components/Schedule";

const Main = () => {
  let user = "said";
  return (
    <div className="bg-primary flex flex-col gap-4 basis-[60%] p-8">
      <div className="flex justify-between">
        <div>
          <h1 className="text-[25px]">Elites School E-learning platform</h1>
          <p className="text-darkgray">
            Hello <span>{user}</span> , welcome back !
          </p>
        </div>
        <div>
          <Search />
        </div>
      </div>
      <div className="flex justify-between">
        {
          adds.map((Element)=> {
            return(
              <Add text={Element.name} bg={Element.bg} />
            )
          })
        }
      </div>
      <div>
        <Lastsubmisstions />
      </div>
      <div className="flex justify-between">
        <Announcement />
        <Schedule />
      </div>
    </div>
  );
};

export default Main;
