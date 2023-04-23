import React, { useContext, useState } from "react";
import { IndexElementContext } from "../../content page/Assignment/Assignment";
import Cancel from "../reusable/Cancel";
import Save from "../reusable/Save";
import Filesdisplays from "../reusable/Filesdisplays";
import fileholder from "../../assets/images/fileholder.svg";
import Publish from "../reusable/Publish";
import Attachfile from "../reusable/Attachfile";
import { handleSubmit } from "./HandleSubmit";

const Addnewassignment = () => {
  const { elementIndex, editMode, firstContent } =
    useContext(IndexElementContext);
  const [title, setTitle] = useState(false);
  const [groupe, setGroupe] = useState(false);
  const [description, setDescripiton] = useState(false);
  const [deadline, setDeadline] = useState(false);
  const [cancel, setCancel] = useState(false);

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
          console.log(cancel) ; 
          if (!cancel) {
            handleSubmit(firstContent, editMode[0], elementIndex[0]);
          }
          if (editMode[0]) {
            editMode[1](false);
          }
          setCancel(false) ; 
          setTitle(null);
          setDeadline(null);
          setDescripiton(null);
          setGroupe(null);
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
                elementIndex[0] != null && editMode[0]
                  ? (firstContent[0][elementIndex[0] - 1].name = "")
                  : null;
                setTitle(e.target.value);
              }}
              value={
                elementIndex[0] != null && editMode[0]
                  ? title || firstContent[0][elementIndex[0] - 1].name
                  : title || ""
              }
            />
          </label>
          <label htmlFor="groupe">
            <input
              type="text"
              placeholder="groupe"
              id="groupe"
              onChange={(e) => {
                elementIndex[0] != null && editMode[0]
                  ? (firstContent[0][elementIndex[0] - 1].name = "")
                  : null;
                setGroupe(e.target.value);
              }}
              value={
                elementIndex[0] != null && editMode[0]
                  ? groupe || firstContent[0][elementIndex[0] - 1].name
                  : groupe || ""
              }
            />
          </label>
          <label htmlFor="description">
            <textarea
              placeholder="Description"
              id="description"
              onChange={(e) => {
                elementIndex[0] != null && editMode[0]
                  ? (firstContent[0][elementIndex[0] - 1].description = "")
                  : null;
                setDescripiton(e.target.value);
              }}
              value={
                elementIndex[0] != null && editMode[0]
                  ? description ||
                    firstContent[0][elementIndex[0] - 1].description
                  : description || ""
              }
            />
          </label>
        </div>
        <div className="flex basis-[49%] flex-col gap-4">
          <div className="flex flex-col gap-4">
            <div className="flex gap-2">
              {editMode[0] ? (
                <Filesdisplays
                  images={firstContent[0][elementIndex[0] - 1].images}
                />
              ) : (
                <Filesdisplays images={[fileholder, fileholder, fileholder]} />
              )}
            </div>

            <label htmlFor="Deadline(Date and time input)">
              <input
                onChange={(e) => {
                  elementIndex[0] != null && editMode[0]
                    ? (firstContent[0][elementIndex[0] - 1].deadline = "")
                    : null;
                  setDeadline(e.target.value);
                }}
                value={
                  elementIndex[0] != null && editMode[0]
                    ? deadline || firstContent[0][elementIndex[0] - 1].deadline
                    : deadline || ""
                }
                type="text"
                id="deadline"
                placeholder="Deadline(Date and time input)"
              />
            </label>
          </div>
          <div className="flex justify-end gap-2 text-white">
            {editMode[0] ? (
              <div onClick={()=>setCancel(true)}>
                <Cancel />
              </div>
            ) : null}
            <Attachfile />
            {editMode[0] ? <Save /> : <Publish />}
          </div>
        </div>
      </form>
    </div>
  );
};

export default Addnewassignment;
