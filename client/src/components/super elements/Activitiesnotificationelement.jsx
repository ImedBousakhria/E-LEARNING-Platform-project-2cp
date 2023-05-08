import React, { useContext, useState } from "react";
import Deleteactivitieselemnt from "../reusable/Deleteactivitieselemnt";
import Editactivitieselement from "../reusable/Editactivitieselement";
import Submissionelement from "./Submissionelement";
import profileholder from "../../assets/profile/profileholder.png";
import Filesdisplays from "../reusable/Filesdisplays";
import { IndexElementContext } from "../../content page/Assignment/Assignment";
import { Page, Document } from "react-pdf";

const Activitiesnotificationelement = ({ element }) => {
  const [numPages, setNumPages] = useState(null);

  
  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }
  const [file, setFile] = useState(null);
  function handleView(data) {
    console.log(data);
    const base64Data = window.btoa(
      String.fromCharCode(...new Uint8Array(data))
      );
      console.log(base64Data);
      const dataUrl = `data:application/pdf;base64,${base64Data}`;
      console.log(dataUrl);
      
      //setFile(dataUrl);
      return dataUrl;
      console.log(file);
    }
    
    const { editMode, elementIndex, dataElements } =
    useContext(IndexElementContext);
    
    console.log(dataElements[elementIndex[0]-1].gallery) ; 
  console.log(dataElements[elementIndex[0] - 1]);

  function handleClick() {
    editMode[1](true);
  }

  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-2">
        <div className="flex items-center justify-between">
          <h2 className="text-[1rem]  font-semibold ">{element.title}</h2>
          <div className="flex gap-1">
            <Editactivitieselement
              handleClick={() => handleClick()}
              text={"Edit"}
            />
            <Deleteactivitieselemnt
              elementIndex={elementIndex}
              dataElements={dataElements}
              type={"assignment"}
              text={"Delete"}
            />
          </div>
        </div>
        <div>
          <p className="text-[13px] font-light text-darkgray">
            {element.description}
          </p>
        </div>
        <div>
          <div className="flex justify-between gap-[2%]">
            <div className="max-w-[28%] text-darkgray">
              <p className="text-[1rem]">Deadline: </p>
              <p className="break-all text-[1rem] font-light  ">
                {element.deadline}
              </p>
            </div>
            <div className="flex basis-[70%] gap-[2%]">
              {dataElements[elementIndex[0] - 1].gallery.map((Element) => {
                let file = handleView(Element.data.data);
                console.log(file) ; 
                return (
                  <div
                    onClick={() => {
                      setFile(file);
                    }}
                    className="h-[4.25rem] overflow-hidden rounded-[5px] object-contain"
                  >
                    <Document file={file} className="rounded-lg shadow-lg">
                      <Page pageNumber={1} scale={1} width={100} />
                    </Document>
                  </div>
                );
              })}
              <div className="w-full ">
                {
                  <Document file={file} onLoadSuccess={onDocumentLoadSuccess}>
                    {Array.from(new Array(numPages), (el, index) => (
                      <Page key={`page_${index + 1}`} pageNumber={index + 1} />
                    ))}
                  </Document>
                }
              </div>
              {/* <Filesdisplays files={element.gallery} /> */}
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-3">
        <div>
          <h2 className="text-[1rem]  font-semibold ">Submissions</h2>
        </div>
        <div className="flex flex-col gap-3">
          {/* element.submissions.map((Element) => {
            return (
              <Submissionelement
                profilepicture={profileholder}
                person={Element.name}
              />
            );
          }) */}
        </div>
      </div>
    </div>
  );
};

export default Activitiesnotificationelement;
