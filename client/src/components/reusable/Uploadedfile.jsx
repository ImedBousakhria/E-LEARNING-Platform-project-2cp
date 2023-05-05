import React, { useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
import example from "./example.pdf";
const Uploadedfile = ({ fileName, file, onRemove }) => {
  const [image, setImage] = useState(null) ; 
  if (file.type.startsWith("image/")) {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setImage(reader.result) ; 
      /* setImage(reader.result) ; 
      console.log(reader.result) */
    };
  } else if (file.type.includes("pdf")) {
    console.log(file) ; 
    const reader = new FileReader();
    reader.readAsBinaryString(file);
    reader.onloadend = () => {
      /* var bytes = new Uint8Array(reader.result.length);
      for (var i = 0; i < reader.result.length; i++) {
        bytes[i] = reader.result.charCodeAt(i);
      } */
      var base64String = window.btoa(reader.result);
      // Encode the Uint8Array as a base64 string using TextEncoder
      /* console.log(bytes);
      var base64String = String.fromCharCode(...bytes);
      console.log(base64String); */
      /* setImage(reader.result) ; 
      console.log(reader.result) */
    };
  }

  return (
    <div className="relative">
      <button
        className="absolute z-20 aspect-square h-8 rounded-full bg-gray p-2 text-darkgray"
        onClick={onRemove}
      >
        X
      </button>
      {file.type.startsWith("image/") ? (
        <div className="basis-[25%]">
          <img
          src={image}
          className="h-[3.75rem] w-full  rounded-xl object-contain"
        />
          </div>
        
      ) : file.type.includes("pdf") ? (
        <div className="relative">
          <button
            className="absolute z-20 aspect-square h-8 rounded-full bg-gray p-2 text-darkgray "
            onClick={onRemove}
          >
            X
          </button>
          <div className="h-[3.75rem] basis-[25%] overflow-hidden object-contain">
            <Document file={file} className="rounded-lg shadow-lg">
              <Page pageNumber={1} scale={1} width={100} />
            </Document>
          </div>
        </div>
      ) : null}
      <p className=" w-24 truncate break-all text-xs ">{fileName}</p>
    </div>
  );
};
export default Uploadedfile;
