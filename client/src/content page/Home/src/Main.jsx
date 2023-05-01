import React, { useContext } from "react";
import Search from "../../../components/reusable/Search";
import { adds } from "../content/main";
import Add from "../../../components/home/Add";
import Lastsubmisstions from "../../../components/home/Lastsubmisstions";
import Announcement from "../../../components/super/Announcement";
import Schedule from "../../../components/home/schedule/Schedule";
import { propsContext } from "../../Mainapp";
import Activitiesheader from "../../../components/super/Activitiesheader";
import Activitiesbody from "../../../components/super/Activitiesbody";
import Bluredbg from "../../../components/reusable/Bluredbg";
import SearchForm from "../../../components/super/SearchForm";
import PopUp from "../../../components/super/PopUp";

const Main = () => {
  let user = "said";
  const { IndexHandle, searchMode } = useContext(propsContext);
  console.log(IndexHandle);
  function handleClick() {
    searchMode[0] ? searchMode[1](false) : searchMode[1](true);
  }
  return (
    <div className="relative flex basis-[60%] flex-col gap-4 bg-primary p-8">
      <div className="flex  justify-between">
        {/* {searchMode[0] ? <Bluredbg /> : null} */}
{/*         {searchMode[0] ? <SearchForm handleClick={handleClick} /> : null}
 */}  
        
        {/* <Bluredbg />
        <PopUp /> */}
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
      <div className="flex flex-wrap justify-between gap-4">
        {adds.map((Element, index) => {
          return <Add text={Element.name} bg={Element.bg} index={index} />;
        })}
      </div>
      <div>
        <Lastsubmisstions />
      </div>
      <div className="flex flex-col gap-4 rounded-[10px] bg-white p-4">
        <div>
          <h2 className="text-[1.25rem]">Recent Lessons</h2>
        </div>
        <div className="flex flex-col gap-4">
          <Activitiesheader type={"students"} />
          <Activitiesbody type={"students"} />
        </div>
      </div>
      <div className="flex w-full justify-between gap-[2%]">
        <Announcement />
        <Schedule />
      </div>
    </div>
  );
};

export default Main;
