import React from "react";
import file from "../../assets/icons/fileassignment.svg";
import arrow from "../../assets/icons/annouarrow.svg";
import { studentAssignment } from "../../content page/Courses/content/main";
import { element } from "prop-types";
import StudentAssignmentElement from "./components/StudentAssignmentElement";

const StudentAssignment = () => {
  /* const postsPerPage = 4;
  const [currentPage, setCurrentPage] = useState(1);
  const lastPostIndex = currentPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;

  const currentPosts = lessons.slice(firstPostIndex, lastPostIndex);
  const isPrevDisabled = currentPage === 1;
  const isNextDisabled = lastPostIndex >= lessons.length;

  const handleNextClick = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const handlePrevClick = () => {
    setCurrentPage((prevPage) => prevPage - 1);
  }; */
  return (
    <div className="flex w-[49%] flex-col gap-4 rounded-[10px] bg-white p-4">
      <div className="flex justify-between">
        <div className="flex items-center gap-2">
          <img src={file} />
          <h2 className="text-[1.25rem]">Assignment</h2>
        </div>
        <div className="flex items-center gap-4">
          <button
            className={`${
              /* isPrevDisabled */ true ? "opacity-50" : ""
            } rotate-180 cursor-pointer`}
            alt=""
            /* onClick={handlePrevClick}
            disabled={isPrevDisabled} */
          >
            <img src={arrow} alt="" />
          </button>
          <button
            className={`${
              /* isNextDisabled */ false ? "opacity-50" : ""
            } cursor-pointer`}
            /* onClick={handleNextClick}
            disabled={isNextDisabled} */
          >
            <img src={arrow} alt="" />
          </button>
        </div>
      </div>
      <div className="flex justify-between gap-y-2 flex-wrap">
        {studentAssignment.map((element, index) => {
          return (
            <StudentAssignmentElement
              assignmentName={element.assignmentName}
              deadline={element.deadline}
              missed={element.missed}
              mark={element.mark}
            />
          );
        })}
      </div>
    </div>
  );
};

export default StudentAssignment;
