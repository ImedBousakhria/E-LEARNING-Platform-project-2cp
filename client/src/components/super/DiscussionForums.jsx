import React, { useContext, useRef, useState } from "react";

import close from "../../assets/icons/close.svg";
import DiscusstionElement from "../super elements/DiscusstionElement";
import { IndexElementContext } from "../../content page/Assignment/Assignment";
import { IndexElementContextquiz } from "../../content page/Quizzes/Quizzes";
import profileHolder from "../../assets/profile/profileholder.png";
import { useForm } from "react-hook-form";
import { homeContext } from "../../content page/Home/Home";
import { CoursesContext } from "../../content page/Courses/Teachercourses";
import axios from "axios";

const DiscussionForums = ({ type, firstContent }) => {
  const toScroll = useRef(null);
  console.log(firstContent)
  const { register, handleSubmit, formState, reset } = useForm();
  var contextProvider;
  if (type == "quiz") {
    contextProvider = IndexElementContextquiz;
  } else if (type == "assignment") {
    contextProvider = IndexElementContext;
  } else if(type == "announcement") {
    contextProvider = homeContext ; 
  }else if(type =="lesson") {
    contextProvider = CoursesContext ; 
  }
  const { showDiscussion } =
    useContext(contextProvider);
  const { announcements, elementIndex } = useContext(homeContext);

  async function postData(data) {
    console.log(data);
    try {
      const response = await axios.post(
        `http://localhost:3000/comments/create`,
        data
      );
      console.log(response);
      /* const result = await response.json();
      console.log("Success:", result); */
    } catch (error) {
      console.error("Error:", error);
    }
  }

  function onSubmit(data) {

    console.log(data);
    let obj = new Object();
    obj.announcement = announcements[elementIndex[0]-1]._id ; 
    obj.user = "645793ffff441f996d86dc0b";
    obj.content = data.comment ; 
    postData(obj) ; 
    location.reload() ; 
    /* firstContent[elementIndex[0] - 1].discussions.push(obj);
    toScroll.current.scrollIntoView({ behavior: "smooth" });
    reset(); */
  }

  return (
    <>
      <div
        className={`absolute z-20 ${showDiscussion[0]}  top-[5%] left-0 right-0 bottom-0  p-4`}
      >
        <div className="relative flex h-full  flex-col gap-4 overflow-hidden rounded-[10px] bg-primary p-3 ">
          <div className="flex items-center justify-between">
            <h4>Discussions Forums</h4>
            <button
              onClick={() => {
                showDiscussion[1]("hidden");
              }}
            >
              <img src={close} />
            </button>
          </div>
          <div onLoad={()=>toScroll.current.scrollIntoView()} className="flex max-h-[85%] hideScrollBar flex-col gap-4 overflow-y-auto">
            {/* {firstContent[elementIndex[0] - 1]?.comments.map(
              (Element) => {
                return <DiscusstionElement type={type} element={Element} />;
              }
            )} */}
            <div ref={toScroll}></div>
          </div>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className=" absolute   bottom-[3%] flex"
          >
            <label htmlFor="comment">
              <input
                type="text"
                id="comment"
                name="comment"
                placeholder="Comment..."
                autoComplete="off"
                {...register("comment", { required: true })}
              />
            </label>
            <button type="submit" disabled={formState.isSubmitting}>
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default DiscussionForums;
