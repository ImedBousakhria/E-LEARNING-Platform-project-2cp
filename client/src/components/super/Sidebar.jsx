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
          if (userType.isAdmin) {
            return (
              <Sectionside
                key={index}
                setIndex={() => {
                  Indexhandle[1](index);
                }}
                iconwhite={Element.iconwhite}
                id={index}
                elementindex={Indexhandle[0]}
                name={Element.name}
                icon={Element.icon}
              />
            );
          } else if (userType.isTeacher) {
            if(index <=5) {
              return(
                <Sectionside
                key={index}
                setIndex={() => {
                  Indexhandle[1](index);
                }}
                iconwhite={Element.iconwhite}
                id={index}
                elementindex={Indexhandle[0]}
                name={Element.name}
                icon={Element.icon}
              />
              )
            }else {
              return null ; 
            }
          } else if (userType.isStudent) {
            console.log("strudent");
            if (index <= 2) {
              return (
                <Sectionside
                  key={index}
                  setIndex={() => {
                    Indexhandle[1](index);
                  }}
                  iconwhite={Element.iconwhite}
                  id={index}
                  elementindex={Indexhandle[0]}
                  name={Element.name}
                  icon={Element.icon}
                />
              );
            } else {
              return null;
            }
          }
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
