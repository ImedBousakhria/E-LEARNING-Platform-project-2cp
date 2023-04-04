import React from "react";
import publish from "../assets/icons/publish.svg";
import attachfile from "../assets/icons/attachfile.svg";

const Addnewassignment = () => {
  return (
    <div className="flex flex-col gap-4 rounded-[10px] bg-white p-4">
      <div>
        <h2 className="text-[1.25rem]">Add new assignment</h2>
      </div>
      <form
        onSubmit={(e) => {
          e.preventDefault;
          alert("hello");
        }}
        className="flex gap-[2%]"
      >
        <div className="flex basis-[49%] flex-col gap-4">
          <label htmlFor="title">
            <input
              className="w-full rounded-[10px] border border-gray p-2"
              type="text"
              placeholder="Title"
            />
          </label>
          <label htmlFor="description">
            <textarea
              className="w-full rounded-[10px] border border-gray p-2"
              placeholder="Description"
            />
          </label>
        </div>
        <div className="flex basis-[49%] flex-col gap-4">
          <div>
            <label htmlFor="Deadline(Date and time input)">
              <input
                type="text"
                className="w-full rounded-[10px] border border-gray p-2"
                placeholder="Deadline(Date and time input)"
              />
            </label>
          </div>
          <div className="flex justify-end gap-2 text-white">
            <label
              htmlFor="attach file"
              className="flex cursor-pointer gap-2 rounded-[10px] bg-blue p-2"
            >
              Attach file
              <img src={attachfile} />
              <input type="file" id="attach file" className="hidden" />
            </label>
            <button
              type="submit"
              className="flex items-center gap-2 rounded-[10px] bg-accent p-2"
            >
              Publish
              <img src={publish} />
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Addnewassignment;
