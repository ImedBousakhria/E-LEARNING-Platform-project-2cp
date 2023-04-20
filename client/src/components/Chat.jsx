import React from "react";
import chat from "../assets/icons/chat.svg"

const Chat = () => {
  return (
    <div>
      <img
        src={chat}
        className=" w-8 cursor-pointer rounded-[8px] border-2 border-nightblue p-1.5"
      />
    </div>
  );
};

export default Chat;
