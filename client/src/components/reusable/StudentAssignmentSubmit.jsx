import React, { useContext, useRef, useState } from "react";
import Download from "./Download";
import Message from "./Message";
import Close from "./Close";
import { useForm } from "react-hook-form";
import Attachfile from "./Attachfile";
import Uploadedfile from "./Uploadedfile";
import Publish from "./Publish";
import { CoursesContext } from "../../content page/Courses/Teachercourses";

const StudentAssignmentSubmit = () => {


  const { register } = useForm();
  const inputRef = useRef(null);

  const { assignments, elementIndex } = useContext(CoursesContext); ; 

  const handleFileUpload = () => {
    inputRef.current.click();
  };
  const [secodeFiles, setSecondFiles] = useState([]);
  const [files, setFiles] = useState([]);

  const handleFileSelected = (event) => {
    const selectedFiles = Array.from(event.target.files);
    setSecondFiles([...secodeFiles, ...selectedFiles]);
    //console.log(event.target.files);

    if (event.target.files[0].type.startsWith("image/")) {
      const reader = new FileReader();
      reader.readAsDataURL(event.target.files[0]);
      reader.onloadend = () => {
        //console.log(reader.result);

        setFiles([...files, reader.result]);
        //console.log(files);
      };
    } else if (event.target.files[0].type.includes("pdf")) {
      const reader = new FileReader();
      reader.readAsBinaryString(event.target.files[0]);
      reader.onloadend = () => {
        var base64String = window.btoa(reader.result);
        setFiles([...files, base64String]);
        //console.log(base64String);
        console.log(files);
      };
    }
    console.log("hll")
    console.log(assignments[elementIndex[0]-1].gallery) ; 

    //console.log(files);
  };
  const handleRemoveFile = (index) => {
    const newArray = secodeFiles.filter((Element, i) => {
      return index != i;
    });
    setFiles(newArray);
  };

  return (
    <div className=" bg-primary p-2 rounded-[10px]">
      <div className="flex justify-between">
        <div>
          <span>sifo</span>
        </div>
        <div className="flex gap-2">
          <Download />
          <Message />
          {/* <Close /> */}
        </div>
      </div>
      <div>
        <div>
          <span>{assignments[elementIndex[0] - 1].title}</span>
          <span>{assignments[elementIndex[0] - 1].description}</span>
        </div>
        <div>{/* files */}</div>
        <form className="flex flex-col gap-2">
          <label htmlFor="likns">
            <input
              type="text"
              placeholder="your links"
              id="links"
              {...register("links")}
            />
          </label>
          <input
            type="file"
            accept=".pdf, image/*"
            ref={inputRef}
            style={{ display: "none" }}
            onChange={handleFileSelected}
          />
          <div className="flex w-full flex-wrap items-center gap-2">
            {secodeFiles.map((file, index) => (
              <Uploadedfile
                fileName={"file.name"}
                file={file}
                onRemove={() => handleRemoveFile(index)}
              />
            ))}
          </div>
          <div className="flex justify-end gap-2">
            <Attachfile onClick={handleFileUpload} />
            <Publish />
          </div>
        </form>
      </div>
    </div>
  );
};

export default StudentAssignmentSubmit;
