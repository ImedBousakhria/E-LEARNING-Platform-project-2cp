import React from "react";
import Seemore from "../reusable/Seemore";
import { announcement } from "../../content page/Home/content/main";
import Announcementelement from "../super elements/Announcementelement";
import { useContext } from "react";

const Announcement = () => {
  return (
    <div className="flex basis-[58%] flex-col gap-4 rounded-[10px] bg-white p-4">
      <div className="flex justify-between">
        <h2 className="text-[1.25rem]">Announcements</h2>
        <Seemore index={1} />
      </div>
      <div className="flex flex-col gap-2">
        {announcement.map((Element) => {
          return (
            <Announcementelement
              profilepicture={Element.profilepicture}
              person={Element.person}
              content={Element.content}
              image={Element.image}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Announcement;
