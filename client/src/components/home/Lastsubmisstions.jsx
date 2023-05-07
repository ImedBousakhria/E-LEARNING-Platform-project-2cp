import React, { useContext, useState } from "react";
import Seemore from "../reusable/Seemore";
import { assignment } from "../../content page/Home/content/main";
import Lastsubmisstionselement from "./homeelements/Lastsubmisstionselement";
import Mark from "../reusable/Mark";
import View from "../reusable/View";
import GiveMark from "../reusable/GiveMark";
import { homeContext } from "../../content page/Home/Home";
import profile from '../../assets/profile/profileholder.png' ; 
import { Page, Document } from "react-pdf";

const Lastsubmisstions = () => {

  const [file, setFile] = useState(null) ;

  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }


  function handleView(data) {
    console.log(data)  ;
    const base64Data = window.btoa(String.fromCharCode(...new Uint8Array(data)));
    console.log(base64Data) ; 
    const dataUrl = `data:application/pdf;base64,${base64Data}`;
    console.log(dataUrl) ; 

    setFile(dataUrl) ;
    console.log(file) ; 
  }

  const {submissions} = useContext(homeContext) ; 
  console.log(submissions) ; 

  return (
    <div className="flex flex-col gap-4 rounded-[10px] bg-white p-4">
      <div className="flex justify-between">
        <h2 className="text-[1.25rem]">Last submissions</h2>
        <Seemore index={3} />
      </div>
      <div className="w-full ">
        {
          <Document file={file} onLoadSuccess={onDocumentLoadSuccess}>
            {Array.from(new Array(numPages), (el, index) => (
              <Page key={`page_${index + 1}`} pageNumber={index + 1} />
            ))}
          </Document>
        }
      </div>
      <div className="flex flex-col gap-2">
        {submissions.map((Element, index) => {
          if (index <= 2) {
            return (
              <div className="flex items-center justify-between rounded-[10px] bg-assignmentbg p-2 ">
                <Lastsubmisstionselement
                  profilepicture={profile}
                  person={Element.submittedBy.firstName}
                  date={Element.submittedDate}
                  groupe={Element.description}
                  assignmentname={Element.assignment.title}
                />
                <div className="flex gap-2">
                  <View
                    handleClickView={() =>
                      handleView(Element.gallery[0].data.data)
                    }
                  />
                </div>
              </div>
            );
          } else {
            return null;
          }
        })}
      </div>
    </div>
  );
};

export default Lastsubmisstions;
