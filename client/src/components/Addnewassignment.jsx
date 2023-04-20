import React, { useContext, useState } from "react";
import publish from "../assets/icons/publish.svg";
import attachfile from "../assets/icons/attachfile.svg";
import { IndexElementContext } from "../content page/Assignment/Assignment";
import { assignmentteacher } from "../content page/Assignment/content/main";

const Addnewassignment = () => {
  const { elementIndex, editMode } = useContext(IndexElementContext);
  const [title, setTitle] = useState(false);
  const [ascii, setAscii] = useState(null);

  console.log(elementIndex);
  /* function handleFileUpload(event) {
    const file = event.target.files[0];
    console.log(file) ; 
    const reader = new FileReader() ; 
    reader.readAsArrayBuffer(file) ; 
    reader.onload = async () => {
      const pdfData = new Uint8Array(reader.result) ; 
      const pdffile = await pdf.getDocument(pdfData).promise ; 

      const page = await pdffile.getPage(1) ; 
      const viewport = page.getViewport({scale:0.5}) ; 

      const canvas = document.createElement('canvas') ; 
      canvas.width = viewport.width ; 
      canvas.height = viewport.height ; 
      const context = canvas.getContext('2d') ; 

      const rederContext = {
        canvasContext : context, 
        viewport: viewport , 
      } ; 
      await page.render(rederContext).promise ; 
      const thumbnail = canvas.toDataURL('image/jpeg') ; 
      setImgUrl(thumbnail) ; 
    }
  } */
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
              id="title"
              onChange={(e) => {
                assignmentteacher[elementIndex[0]-1].name ="" ;
                setTitle(e.target.value) ;  
              }}
              value={
                elementIndex[0] != null && editMode[0]
                  ? title || assignmentteacher[elementIndex[0] - 1].name
                  : null
              }
            />
          </label>
          <label htmlFor="description">
            <textarea
              placeholder="Description"
              value={
                elementIndex[0] != null
                  ? assignmentteacher[elementIndex[0] - 1].description
                  : null
              }
            />
          </label>
        </div>
        <div className="flex basis-[49%] flex-col gap-4">
          <div>
            <div>
              <img src={null} />
            </div>
            <label htmlFor="Deadline(Date and time input)">
              <input type="text" placeholder="Deadline(Date and time input)" />
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
