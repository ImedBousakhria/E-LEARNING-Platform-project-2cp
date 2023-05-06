import React from "react";
import Publish from "../reusable/Publish";
import Attachfile from "./../reusable/Attachfile";
import { useRef, useState } from "react";
import Uploadedfile from "../../components/reusable/Uploadedfile";
import pfp from "../../assets/profile/profileholder.png";
import { useContext } from "react";
import { AnnouncementContext } from "../../content page/Announcements/Teacherannounce";
import Save from "../reusable/Save";
import Cancel from "./../reusable/Cancel";
import axios from "axios";

const Newannounce = ({ setActiveCardIndex }) => {
  // post Announcement
  const addAnnouncement = async (testAnnouncement) => {
    try {
      const response = await axios.post(
        "http://localhost:3000/announcement/create",
        testAnnouncement
      );
      return response.data;
    } catch (error) {
      console.error(error);
    }
  };

  const handleCreation = async () => {
    const toAdd = {
      title: Acontent.title,
      description: Acontent.description,
      gallery: files,
    };

    const newAnnouncement = await addAnnouncement(toAdd);
    console.log(newAnnouncement);
  };

  const inputRef = useRef(null);
  const [files, setFiles] = useState([]);
  const { editMode, Acontent, setContent, setItem, setEditMode } =
    useContext(AnnouncementContext);
  // editMode ? focusRef.current.focus() : null;

  const newItem = {
    profilepicture: pfp,
    person: "Imed",
    content: Acontent.description,
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    console.log(name, value);
    setContent((prevContent) => ({ ...prevContent, [name]: value }));
    console.log(Acontent);
  };

  const handleFileUpload = () => {
    inputRef.current.click();
  };

  const handleFileSelected = (event) => {
    const selectedFiles = Array.from(event.target.files);
    setFiles((prevFiles) => [...prevFiles, ...selectedFiles]);
    console.log(files);
  };

  const handleRemoveFile = (index) => {
    const newArray = files.filter((Element, i) => {
      return index != i;
    });
    setFiles(newArray);
  };

  return (
    <div
      className={` ${
        editMode ? " shadow-2xl" : " shadow-md"
      } mb-7 rounded-[10px] bg-white px-8 py-6`}
    >
      <p className=" mb-3 text-lg font-semibold text-nightblue">
        {editMode ? "Edit announcement" : "Add a new announcement"}
      </p>
      <div className="  flex justify-between">
        <div className="flex w-[45%] flex-col gap-6 ">
          <input
            type="text"
            name="title"
            placeholder="Title"
            onChange={handleChange}
            className=" rounded-[10px] border border-darkgray px-3 py-3.5 outline-none"
          />
          <textarea
            value={Acontent.description}
            type="text"
            name="description"
            placeholder="Description"
            onChange={handleChange}
            className=" resize-none rounded-[10px] border border-darkgray px-3 pt-3.5 pb-24 outline-none"
          />
        </div>

        <div className="flex w-[45%] flex-col justify-between">
          <div className=" basis-[80%] pb-4">
            <div className="flex flex-wrap items-center gap-2">
              {files.map((file, index) => (
                <Uploadedfile
                  fileName={file.name}
                  file={file}
                  onRemove={() => handleRemoveFile(index)}
                />
              ))}
            </div>
            <input
              type="file"
              accept=".pdf, image/*"
              multiple="true"
              ref={inputRef}
              style={{ display: "none" }}
              onChange={handleFileSelected}
            />
          </div>
          <div className="flex gap-4 place-self-end">
            {
              editMode ? (
                <Cancel
                  setEditMode={setEditMode}
                  setContent={setContent}
                  text={Cancel}
                />
              ) : null
              // no change on the content, Restore old data
            }
            <Attachfile onClick={handleFileUpload} />
            {!editMode ? (
              <Publish
                onClick={() => {
                  handleCreation(),
                  setContent(null)
                    /* setItem((prevItems) => [newItem, ...prevItems]); */
                    setActiveCardIndex((prev) => prev + 1);
                }}
              />
            ) : (
              <Save setEditMode={setEditMode} /> // set the content to the edited one;
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Newannounce;
