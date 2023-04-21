import React, { useContext, useState } from "react";
import { IndexElementContext } from "../content page/Assignment/Assignment";
import { assignmentteacher } from "../content page/Assignment/content/main";
import Cancel from "./reusable/Cancel";
import Save from "./reusable/Save";
import Filesdisplays from "./reusable/Filesdisplays";
import fileholder from "../assets/images/fileholder.svg";
import Publish from "./reusable/Publish";
import Attachfile from "./reusable/Attachfile";

const Addnewassignment = () => {
  const { elementIndex, editMode } = useContext(IndexElementContext);
  const [title, setTitle] = useState(false);
  const [description, setDescripiton] = useState(false);
  const [deadline, setDeadline] = useState(false);

  console.log(editMode[0]);
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
                assignmentteacher[elementIndex[0] - 1].name = "";
                setTitle(e.target.value);
              }}
              value={
                elementIndex[0] != null && editMode[0]
                  ? title || assignmentteacher[elementIndex[0] - 1].name
                  : ""
              }
            />
          </label>
          <label htmlFor="description">
            <textarea
              placeholder="Description"
              onChange={(e) => {
                assignmentteacher[elementIndex[0] - 1].description = "";
                setDescripiton(e.target.value);
              }}
              value={
                elementIndex[0] != null && editMode[0]
                  ? description ||
                    assignmentteacher[elementIndex[0] - 1].description
                  : ""
              }
            />
          </label>
        </div>
        <div className="flex basis-[49%] flex-col gap-4">
          <div className="flex flex-col gap-4">
            <div className="flex gap-2">
              {editMode[0] ? (
                <Filesdisplays
                  images={assignmentteacher[elementIndex[0] - 1].images}
                />
              ) : (
                <Filesdisplays images={[fileholder, fileholder, fileholder]} />
              )}
            </div>

            <label htmlFor="Deadline(Date and time input)">
              <input
                onChange={(e) => {
                  assignmentteacher[elementIndex[0] - 1].deadline = "";
                  setDeadline(e.target.value);
                }}
                value={
                  elementIndex[0] != null && editMode[0]
                    ? deadline ||
                      assignmentteacher[elementIndex[0] - 1].deadline
                    : ""
                }
                type="text"
                placeholder="Deadline(Date and time input)"
              />
            </label>
          </div>
          <div className="flex justify-end gap-2 text-white">
            {editMode[0] ? <Cancel setEditMode={editMode[1]} /> : null}
            <Attachfile />
            {editMode[0] ? (
              <Save setEditMode={editMode[1]} />
            ) : (
              <Publish />
              
            )}
          </div>
        </div>
      </form>
    </div>
  );
};

export default Addnewassignment;
