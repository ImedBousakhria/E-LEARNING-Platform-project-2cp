import React from 'react'

const DiscusstionElement = ({element, type}) => {
  return (
    <div
      className={`flex justify-${
        element.name == "said" && type == "assignment" ? "end" : "start"
      } gap-1 `}
    >
      <div>
        <img
          src={
            element.name == "said" && type == "assignment"
              ? null
              : element.profile
          }
        />
      </div>
      <div className="flex flex-col">
        <div className="text-[0.9rem]">
          <p
            className={` text-${
              element.name == "said" && type == "assignment" ? "end" : "start"
            }`}
          >
            {element.name == "said" && type == "assignment"
              ? "you"
              : element.name}
          </p>
        </div>
        <div
          className={` rounded-[0.75rem] ${
            element.name == "said" && type == "assignment"
              ? "rounded-tr-[0px]"
              : "rounded-tl-[0px]"
          } bg-${
            element.name == "said" && type == "assignment" ? "blue" : "white"
          } p-2 text-[0.75rem] `}
        >
          <p
            className={`max-w-[15ch] break-words text-${
              element.name == "said" && type == "assignment" ? "white" : "black"
            } `}
          >
            {element.text}
          </p>
        </div>
      </div>
    </div>
  );
}

export default DiscusstionElement