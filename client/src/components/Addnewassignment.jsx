import React, { useState } from "react";
import publish from "../assets/icons/publish.svg";
import attachfile from "../assets/icons/attachfile.svg";
import fileholder from '../assets/images/fileholder.svg' ; 
import { extractImageFromPdf } from "../utils/pdfToImage";

const Addnewassignment = () => {
  const [imageData, setImageData] = useState(null) ; 
  function handleFileUpload(event) {
    const file = event.target.files[0];
    extractImageFromPdf(file).then((page)=> console.log(page)) ; 
  }
  return (
    <div className="flex flex-col gap-4 rounded-[10px] bg-white p-4">
      <div>
        <h2 className="text-[1.25rem]">Add new assignment</h2>
      </div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          
        }}
        className="flex gap-[2%]"
      >
        <div className="flex basis-[49%] flex-col gap-4">
          <label htmlFor="title">
            <input
              type="text"
              placeholder="Title"
            />
          </label>
          <label htmlFor="description">
            <textarea
              placeholder="Description"
              
            />
          </label>
        </div>
        <div className="flex basis-[49%] flex-col gap-4">
          <div>
            <div>
              <img src={imageData?imageData:fileholder} />
            </div>
            <label htmlFor="Deadline(Date and time input)">
              <input
                type="text"
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
              <input type="file" id="attach file" onChange={handleFileUpload} className="hidden" />
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
