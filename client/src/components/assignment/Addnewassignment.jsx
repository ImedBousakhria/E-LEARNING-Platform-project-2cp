import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { IndexElementContext } from "../../content page/Assignment/Assignment";
import Cancel from "../reusable/Cancel";
import Save from "../reusable/Save";
import Filesdisplays from "../reusable/Filesdisplays";
import Publish from "../reusable/Publish";
import ArrachFile from "../reusable/ArrachFile";

const Addnewassignment = () => {
  const { register, handleSubmit, reset } = useForm();

  const { elementIndex, editMode, firstContent } =
    useContext(IndexElementContext);
  const [files, setFiles] = useState([]);

  const [cancel, setCancel] = useState(false);

  const handleAddedFile = (e) => {
    setFiles([...files, e.target.files[0]]);
    console.log(e.target.files[0]);
  };

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
        onSubmit={handleSubmit((data) => {
          let obj = new Object();
          obj.name = data.name
            ? data.name
            : firstContent[0][elementIndex[0] - 1].name;
          obj.groupe = data.groupe
            ? data.groupe
            : firstContent[0][elementIndex[0] - 1].groupe;
          obj.description = data.description
            ? data.description
            : firstContent[0][elementIndex[0] - 1].description;
          obj.deadline = data.deadline
            ? data.deadline
            : firstContent[0][elementIndex[0] - 1].deadline;

          const currentDate = new Date(); // get current date and time
          const day = currentDate.getDate().toString().padStart(2, "0"); // get day of the month and add leading zero if necessary
          const month = (currentDate.getMonth() + 1)
            .toString()
            .padStart(2, "0"); // get month and add leading zero if necessary
          const year = currentDate.getFullYear().toString().slice(-2); // get year and convert to 2-digit format
          const hour =
            currentDate.getHours() > 12
              ? (currentDate.getHours() - 12).toString().padStart(2, "0")
              : currentDate.getHours().toString().padStart(2, "0"); // get hour in 12-hour format and add leading zero if necessary
          const minute = currentDate.getMinutes().toString().padStart(2, "0"); // get minute and add leading zero if necessary
          const ampm = currentDate.getHours() >= 12 ? "PM" : "AM"; // get AM/PM
          const formattedDate = `${day}/${month}/${year},${hour}:${minute}${ampm}`; // combine all parts into the desired format
          console.log(formattedDate); // output: e.g. 29/03/23,11:00PM

          obj.date = formattedDate;
          obj.submissions = firstContent[0][elementIndex[0] - 1]?.submissions
            ? firstContent[0][elementIndex[0] - 1].submissions
            : [];
          obj.discussions = firstContent[0][elementIndex[0] - 1]?.discussions
            ? firstContent[0][elementIndex[0] - 1]?.discussions
            : [];
          obj.files = files
            ? files
            : firstContent[0][elementIndex[0] - 1].files;
          console.log(obj);
          console.log("no cancel");
          if (!cancel) {
            if (editMode[0]) {
              firstContent[0][elementIndex[0] - 1] = obj;
              console.log("ssave");
            } else {
              firstContent[1]([...firstContent[0], obj]);
            }
          }
          if (editMode[0]) {
            editMode[1](false);
          }
          reset();
          setFiles([]);
        })}
        className="flex gap-[2%]"
      >
        <div className="flex basis-[49%] flex-col gap-4">
          <label htmlFor="name">
            <input
              type="text"
              placeholder="name"
              id="name"
              {...register("name")}
              defaultValue={
                elementIndex[0] != null && editMode[0]
                  ? firstContent[0][elementIndex[0] - 1].name
                  : null
              }
            />
          </label>
          <label htmlFor="groupe">
            <input
              type="text"
              placeholder="groupe"
              id="groupe"
              {...register("groupe")}
              defaultValue={
                elementIndex[0] != null && editMode[0]
                  ? firstContent[0][elementIndex[0] - 1].groupe
                  : null
              }
            />
          </label>
          <label htmlFor="description">
            <input
              placeholder="Description"
              id="description"
              {...register("description")}
              defaultValue={
                elementIndex[0] != null && editMode[0]
                  ? firstContent[0][elementIndex[0] - 1].description
                  : null
              }
            />
          </label>
        </div>
        <div className="flex basis-[49%] flex-col gap-4">
          <div className="flex flex-col gap-4">
            <div className="flex gap-2">
              <Filesdisplays
                files={
                  editMode[0]
                    ? firstContent[0][elementIndex[0] - 1].files
                    : files
                }
                handleDeleteFile={setFiles}
              />
            </div>

            <label htmlFor="Deadline(Date and time input)">
              <input
                type="text"
                id="deadline"
                placeholder="Deadline(Date and time input)"
                {...register("deadline")}
                defaultValue={
                  elementIndex[0] != null && editMode[0]
                    ? firstContent[0][elementIndex[0] - 1].deadline
                    : null
                }
              />
            </label>
          </div>
          <div className="flex justify-end gap-2 text-white">
            {editMode[0] ? (
              <div>
                <Cancel onClick={() => setCancel(true)} />
              </div>
            ) : null}
            <ArrachFile handleChange={handleAddedFile} />
            {editMode[0] ? <Save /> : <Publish />}
          </div>
        </div>
      </form>
    </div>
  );
};

export default Addnewassignment;
