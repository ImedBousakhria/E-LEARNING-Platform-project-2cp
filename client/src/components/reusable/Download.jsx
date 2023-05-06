import React from 'react'
import { downloadFile } from '../reusableFunc/downloadFile';
import download from '../../assets/icons/download.svg'
import { useState } from 'react';

const Download = ({file}) => {
    const [fileUrl, setFileUrl] = useState(null);

    const handleClick = () => {
        downloadFile(setFileUrl);
      };
  return (
    <div>
        {fileUrl && (
        <a href={fileUrl} download={file.name}>
          Download {file.name}
        </a>
      )}
      <img
        src={download}
        className=" w-8 cursor-pointer rounded-[8px] border-2 border-accent p-1.5"
        onClick={handleClick}
      />
    </div>
  )
}

export default Download