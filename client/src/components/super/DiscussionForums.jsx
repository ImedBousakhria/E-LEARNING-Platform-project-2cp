import React, { useContext, useState } from "react";

import close from "../../assets/icons/close.svg";
import DiscusstionElement from "../super elements/DiscusstionElement";
import { IndexElementContext } from "../../content page/Assignment/Assignment";

const DiscussionForums = ({ discussions }) => {
  const {showDiscussion} = useContext(IndexElementContext)
  console.log(discussions) ; 

  return (
    <>
      <div
        className={`absolute ${showDiscussion[0]} top-[5%] left-0 right-0 bottom-0  p-4`}
      >
        <div className="relative flex h-full  flex-col gap-4 rounded-[10px] bg-primary p-3 ">
          <div className="flex items-center justify-between">
            <h4>Discussions Forums</h4>
            <button
              onClick={() => {
                setShowNotificationcontent("hidden");
                setNoficationState(notificationIcon);
              }}
            >
              <img src={close} />
            </button>
          </div>
          <div className="flex flex-col gap-4">
            {discussions.map((Element) => {
              return <DiscusstionElement element={Element} />;
            })}
          </div>
          <form className="  absolute bottom-[3%]">
            <label  htmlFor="comment">
              <input  type="text" id="comment" name="comment" placeholder="Comment..." />

            </label>
          </form>
        </div>
      </div>
    </>
  );
};

export default DiscussionForums;
