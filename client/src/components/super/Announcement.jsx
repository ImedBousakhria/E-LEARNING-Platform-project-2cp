import React from "react";
import Seemore from "../reusable/Seemore";
import profile from '../../assets/profile/profileholder.png'
//import { announcement } from "../../content page/Home/content/main";
import Announcementelement from "../super elements/Announcementelement";
import { useContext } from "react";
import { homeContext } from "../../content page/Home/Home";


const Announcement = () => {
  const { announcements } = useContext(homeContext); 
  console.log(announcements); 
  return (
    <div className="flex basis-[58%] flex-col gap-4 rounded-[10px] bg-white p-4">
      <div className="flex justify-between">
        <h2 className="text-[1.25rem]">Announcements</h2>
        <Seemore index={1} />
      </div>
      <div className="flex flex-col gap-2">
        {/* {announcements?.map((Element, index) => {
          return (
            <Announcementelement
              profilepicture={profile}
              person={Element.person}
              content={Element.content}
              image={Element.image}
              index={index}
            />
          );
        })} */}
      </div>
    </div>
  );
};

export default Announcement;
