import React, { useContext, useState } from "react";
import submition from "../../assets/icons/submition.svg";
import Deleteactivitieselemnt from "../reusable/Deleteactivitieselemnt";
import Editactivitieselement from "../reusable/Editactivitieselement";
import { IndexElementContext } from "../../content page/Assignment/Assignment";
import { IndexElementContextquiz } from "../../content page/Quizzes/Quizzes";
import Message from "../reusable/Message";
import { homeContext } from "../../content page/Home/Home";
import { propsContext } from "../../content page/Mainapp";
import { formatDate } from "../reusableFunc/formatDate";
import { CoursesContext } from "../../content page/Courses/Teachercourses";

const Activitiesbodyelement = ({
  title,
  cours,
  deadline,
  checkall,
  index,
  type,
}) => {
  var contextElement = null;
  if (type == "assignment") {
    contextElement = IndexElementContext;
  } else if (type == "quiz") {
    contextElement = IndexElementContextquiz;
  } else if (type == "students") {
    contextElement = CoursesContext;
  } else if (type == "studentshome") {
    contextElement = homeContext;
  }

  const [couresTitle, setCourseTitle] = useState(null);

  const { courses } = useContext(propsContext);

  //console.log(courses);
  let course = courses.find((course) => course._id == cours);
  //setCourseTitle(course.courseID.title);
  //console.log(course);

  let deadlineFormated =   formatDate(deadline) ; 

  const [check, setCheck] = useState(false);
  const { elementIndex, editMode,dataElements,  showDiscussion } = useContext(contextElement);

  /* function handleClick() {
    if (showDiscussion[0] == "hidden") {
      showDiscussion[1]("block");
    } else {
      showDiscussion[1]("hidden");
    }
  } */
  function handleClick() {
    editMode[1](true);
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
          {title}
        </div>
        {type != "students" ? (
          <div className=" seperator">{course?.courseID?.title}</div>
        ) : null}

        <div className="seperator">{deadlineFormated}</div>
      </div>
      <div className="flex basis-[15%] items-center justify-center gap-2 ">
        {type != "students" ? (
          <>
{            <Deleteactivitieselemnt dataElements={dataElements} elementIndex={elementIndex} type={type} text={null} />
}            <Editactivitieselement handleClick={()=>handleClick()} text={null} />
          </>
        ) : null}
      </div>
    </div>
  );
};

export default Activitiesbodyelement;
