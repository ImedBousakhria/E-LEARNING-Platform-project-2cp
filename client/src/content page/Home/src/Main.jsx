import React, { useContext } from "react";
import Search from "../../../components/reusable/Search";
import { adds } from "../content/main";
import Add from "../../../components/home/Add";
import Lastsubmisstions from "../../../components/home/Lastsubmisstions";
import Announcement from "../../../components/super/Announcement";
import Schedule from "../../../components/home/schedule/Schedule";
import { propsContext } from "../../Mainapp";

const Main = () => {
  let user = "said";
  const {indexHandle} = useContext(propsContext) ; 
  console.log(indexHandle) ; 
  return (
    <div className="flex basis-[60%] flex-col gap-4 bg-primary p-8">
      <div className="flex justify-between">
        <div>
          <h1 className="text-[25px]">Elites School E-learning platform</h1>
          <p className="text-darkgray">
            Hello <span>{user}</span> , welcome back !
          </p>
        </div>
        <div >
          <Search />
        </div>
      </div>
      <div className="flex flex-wrap gap-4 justify-between">
        {adds.map((Element, index) => {
          return <Add text={Element.name} bg={Element.bg} index={index} />;
        })}
      </div>
      <div>
        <Lastsubmisstions />
      </div>
      <div className="flex w-full justify-between gap-[2%]">
        <Announcement />
        <Schedule />
      </div>
    </div>
  );
};

export default Main;
