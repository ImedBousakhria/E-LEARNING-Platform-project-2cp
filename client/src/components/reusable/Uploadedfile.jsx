import React from "react";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
import example from "./example.pdf";

const Uploadedfile = ({ fileName, file, onRemove }) => {
  return (
    <div className="relative">
      <button
        className="absolute z-20 aspect-square h-8 rounded-full bg-gray p-2 text-darkgray"
        onClick={onRemove}
      >
        X
      </button>
      {file.type.startsWith("image/") ? (
        <img
          src={URL.createObjectURL(file)}
          className=" aspect-square w-24 cursor-pointer rounded-xl object-contain"
        />
      ) : file.type.includes("pdf") ? (
        <div className="relative">
          <button
            className="absolute z-20 aspect-square h-8 rounded-full bg-gray p-2 text-darkgray "
            onClick={onRemove}
          >
            X
          </button>
          <Document file={file} className="rounded-lg shadow-lg">
            <Page pageNumber={1} scale={1} width={100} />
          </Document>
        </div>
      ) : null}
      <p className=" w-24 truncate break-all text-xs ">{fileName}</p>
    </div>
  );
};
export default Uploadedfile;
