import React, { useContext, useRef, useState } from "react";

import close from "../../assets/icons/close.svg";
import DiscusstionElement from "../super elements/DiscusstionElement";
import { IndexElementContext } from "../../content page/Assignment/Assignment";
import { IndexElementContextquiz } from "../../content page/Quizzes/Quizzes";
import profileHolder from "../../assets/profile/profileholder.png";
import { useForm } from "react-hook-form";

const DiscussionForums = ({ type }) => {
  const toScroll = useRef(null);

  const { register, handleSubmit, formState, reset } = useForm();
  var contextProvider;
  if (type == "quiz") {
    contextProvider = IndexElementContextquiz;
  } else if (type == "assignment") {
    contextProvider = IndexElementContext;
  }
  const { showDiscussion, firstContent, elementIndex } =
    useContext(contextProvider);
  function onSubmit(data) {
    console.log(data);
    let obj = new Object();
    obj = { text: data.comment, name: "said", profile: profileHolder };
    firstContent[0][elementIndex[0] - 1].discussions.push(obj);
    toScroll.current.scrollIntoView({ behavior: "smooth" });
    reset();
  }

  return (
    <>
      <div
        className={`absolute ${showDiscussion[0]}  top-[5%] left-0 right-0 bottom-0  p-4`}
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
          <div onLoad={()=>toScroll.current.scrollIntoView()} className="flex max-h-[85%] flex-col gap-4 overflow-y-auto">
            {firstContent[0][elementIndex[0] - 1]?.discussions.map(
              (Element) => {
                return <DiscusstionElement element={Element} />;
              }
            )}
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
