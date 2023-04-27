import React, { useContext, useState } from "react";
import submition from "../../assets/icons/submition.svg";
import Deleteactivitieselemnt from "../reusable/Deleteactivitieselemnt";
import Editactivitieselement from "../reusable/Editactivitieselement";
import { IndexElementContext } from "../../content page/Assignment/Assignment";
import { IndexElementContextquiz } from "../../content page/Quizzes/Quizzes";
import Message from "../reusable/Message";
import { homeContext } from "../../content page/Home/Home";

const Activitiesbodyelement = ({
  name,
  groupe,
  date,
  checkall,
  index,
  type,
}) => {
  var contextElement = null;
  if (type == "assignment") {
    contextElement = IndexElementContext;
  } else if (type == "quiz") {
    contextElement = IndexElementContextquiz;
  }else if(type =="students") {
    contextElement = homeContext ; 
  }
  const [check, setCheck] = useState(false);
  const { elementIndex, showDiscussion } = useContext(contextElement);

  function handleClick() {
    if(showDiscussion[0] == "hidden") {
      showDiscussion[1]("block")
    }else {
      showDiscussion[1]("hidden") ; 
    }
  }

  return (
    <div
      onClick={() => {
        if (type == "students") {
          return;
        }

        elementIndex[1](index);
      }}
      className={`flex cursor-pointer items-center justify-between rounded-[10px] bg-primary   px-[15px] py-[9px] hover:bg-verydarkgray`}
    >
      <div className="flex items-center justify-center">
        {type != "students" ? (
          <input
            type="checkbox"
            checked={checkall || check}
            onClick={() => {
              check || checkall ? setCheck(false) : setCheck(true);
            }}
          />
        ) : null}
      </div>
      <div className="grid-row-1 grid basis-[80%] grid-cols-3 gap-[2rem]">
        <div className="flex gap-2 ">
          <img src={submition} />
          {name}
        </div>
        {type != "students" ? <div className=" seperator">{groupe}</div> : null}

        <div className="seperator">{date}</div>
      </div>
      <div className="flex basis-[15%] items-center justify-center gap-2 ">
        {type == "quiz" ? null : (
          <Message
            handleClick={() => {
              handleClick();
            }}
          />
        )}

        {type != "students" ? (
          <>
            <Deleteactivitieselemnt text={null} />
            <Editactivitieselement type={type} text={null} />
          </>
        ) : null}
      </div>
    </div>
  );
};

export default Activitiesbodyelement;
