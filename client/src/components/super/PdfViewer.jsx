import React, { useContext } from 'react'
import { Page, Document } from 'react-pdf';
import { homeContext } from '../../content page/Home/Home';
import { mainContext } from '../../content page/Home/src/Main';

const PdfViewer = ({file,numPages}) => {
  const {showFile} = useContext(mainContext) ; 

  return (
    <div className={` absolute ${showFile[0]} top-0 bottom-0 left-0 right-0 flex justify-center overflow-scroll z-50 p-3 bg-verydarkgray`}>
      <div onClick={()=>showFile[1]('hidden')}>
        close
      </div>
      <Document file={file}>
        {Array.from(new Array(numPages), (el, index) => (
          <Page key={`page_${index + 1}`} pageNumber={index + 1} />
        ))}
      </Document>
    </div>
  );
}

export default PdfViewer