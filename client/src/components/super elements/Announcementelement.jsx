import React, { useContext, useState } from "react";
import Profile from "../reusable/Profile";
import Message from "../reusable/Message";
import { homeContext } from "../../content page/Home/Home";
import { Page, Document } from "react-pdf";

const Announcementelement = ({
  profilepicture,
  person,
  content,
  index,
  gallery,
}) => {
  const { showDiscussion, elementIndex } = useContext(homeContext);
  
  const [numPages, setNumPages] = useState(null);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }
  
  function handleClick() {
    if (showDiscussion[0] == "hidden") {
      showDiscussion[1]("block");
    } else {
      showDiscussion[1]("hidden");
    }
  }

  const  [file, setFile] = useState(null) ; 
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

  console.log(gallery);

  return (
    <div
      onClick={() => {
        elementIndex[1](index + 1);
      }}
      className="flex   flex-col  gap-2 rounded-[10px] bg-assignmentbg p-2 text-darkgray"
    >
      <div className="flex justify-between">
        <Profile profilepicture={profilepicture} person={person} />
        <Message
          handleClick={() => {
            handleClick();
          }}
        />
      </div>
      <div className="flex w-full flex-col">
        <div className="w-full">
          <p>{content}</p>
        </div>
        <div className="flex w-full gap-1">
          {gallery.map((Element) => {
            let file = handleView(Element.data.data);
            return (
              <div
                onClick={() => {setFile(file)}}
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
        </div>

        {/* <div style={{ flexBasis: image ? "70%" : "100%" }}>
          <p>{content}</p>
        </div>
        <div style={{ flexBasis: image ? "30%" : "0%" }}>
          {image ? <img className="w-full object-cover" src={image} /> : null}
        </div> */}
      </div>
    </div>
  );
};

export default Announcementelement;
