import React, { useContext } from "react";
import logo from "../../assets/logos/logo.svg";
import { sections } from "../../content page/Home/content/sidebar";
import Sectionside from "../super elements/Sectionside";
import Help from "../../content page/Home/src/Help";
import { propsContext } from "../../content page/Mainapp";

const Sidebar = () => {
  console.log(propsContext);

  const { Indexhandle, userType } = useContext(propsContext);

  return (
    <div className="sticky left-0 top-0 flex h-[100vh] basis-[17%] flex-col gap-8 border-r border-gray bg-white p-4">
      <div className="flex justify-center">
        <img src={logo} />
      </div>
      <div className="flex flex-col gap-4">
        {sections.map((Element, index) => {
          return (
            <Sectionside
              setIndex={() => {Indexhandle[1](index)}}
              iconwhite={Element.iconwhite}
              id={index}
              elementindex={Indexhandle[0]}
              name={Element.name}
              icon={Element.icon}
            />
          );
        })}
      </div>

      {userType.isAdmin ? null : (
        <div>
          <Help />
        </div>
      )}
    </div>
  );
};

export default Sidebar;
