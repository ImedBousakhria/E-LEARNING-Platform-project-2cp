import React, { useContext, useState } from "react";
import submition from "../../assets/icons/submition.svg";
import Deleteassignment from "../reusable/Deleteactivitieselemnt";
import Editassignment from "../reusable/Editactivitieselement";
import { IndexElementContext } from "../../content page/Assignment/Assignment";
import { IndexElementContextquiz } from "../../content page/Quizzes/Quizzes";

const Activitiesbodyelement = ({
  name,
  groupe,
  date,
  checkall,
  index,
  type,
}) => {
  console.log(type === "assignment");
  var contextElement = null;
  if (type == "assignment") {
    contextElement = IndexElementContext;
  } else if (type == "quiz") {
    contextElement = IndexElementContextquiz;
  }
  const [check, setCheck] = useState(false);
  const [elementIndex, setElementIndex] = useContext(contextElement);

  return (
    <div
      onClick={() => {
        setElementIndex(index);
      }}
      className={`flex cursor-pointer bg-primary items-center justify-between rounded-[10px]   px-[15px] py-[9px] hover:bg-verydarkgray`}
    >
      <div className="flex items-center justify-center">
        <input
          type="checkbox"
          checked={checkall || check}
          onClick={() => {
            check || checkall ? setCheck(false) : setCheck(true);
          }}
        />
      </div>
      <div className="grid-row-1 grid basis-[80%] grid-cols-3 gap-[2rem]">
        <div className="flex gap-2 ">
          <img src={submition} />
          {name}
        </div>
        <div className="seperator">{groupe}</div>
        <div className="seperator">{date}</div>
      </div>
      <div className="flex basis-[15%] items-center justify-center gap-2 ">
        <Deleteassignment text={null} />
        <Editassignment text={null} />
      </div>
    </div>
  );
};

export default Activitiesbodyelement;
