import React from "react";
import { useContext } from "react";
import edit from "../../assets/icons/edit.svg";
import bin from "../../assets/icons/bin.svg";
import quitIcon from "../../assets/icons/quit.svg"
import { CoursesContext } from "../../content page/Courses/Teachercourses";

const Lessondisplayed = ({
  self,
  content,
  image,
  onClick,
  isActive,
  isDisplayed,
}) => {
  const { items, setItem, setBarContent, setEditMode, setContent } =
    useContext(CoursesContext);
  return (
    <div
      className={`${!isDisplayed ? " cursor-pointer" : ""}
          ${
            isActive
              ? " bg-darkgray p-2 text-nightblue"
              : " bg-assignmentbg p-2 text-darkgray"
          }
          flex flex-col gap-2 rounded-[10px] shadow-md`}
      onClick={onClick}
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-1 justify-self-end">
          {isDisplayed ? (
            <img
              src={quitIcon}
              className="w-8 cursor-pointer rounded-[8px] border-2"
              onClick={() => {
                setBarContent(null);
                setEditMode(false);
                setContent((prevContent) => ({
                  ...prevContent,
                  description: "",
                }));
              }}
            />
          ) : null}
        </div>
      </div>
      <div className="flex w-full items-end">
        <div style={{ flexBasis: image ? "70%" : "100%" }}>
          <p>{content}</p>
        </div>
        <div style={{ flexBasis: image ? "30%" : "0%" }}>
          {image && !isDisplayed ? (
            <img className="w-full object-cover" src={image} />
          ) : null}
        </div>
      </div>
      {isDisplayed ? (
        <img className="w-full basis-[30%] object-cover" src={image} />
      ) : null}

      {self && isDisplayed ? (
        <div className="mt-6 flex justify-end gap-1">
          <div
            onClick={() => setEditMode(true)}
            className="flex min-w-max cursor-pointer items-center gap-1 rounded-[8px] border-2 border-accent px-1.5 py-1 font-semibold text-accent"
          >
            <span>Edit</span>
            <img src={edit} />
          </div>
          <div
            onClick={() => {
              const newArray = items.filter((item) => item.person !== "said");
              setItem(newArray);
              setBarContent(null);
            }}
            className="flex min-w-max cursor-pointer items-center gap-1 rounded-[8px] border-2 border-red px-1.5 py-1 font-semibold text-red"
          >
            <span>Delete</span>
            <img src={bin} />
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default Lessondisplayed;
