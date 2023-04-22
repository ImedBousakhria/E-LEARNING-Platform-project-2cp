import React from "react";

const Uploadedfile = ({ fileName, file }) => {
  return (
    <div>
      {file.type.startsWith("image/") ? (
        <img
          src={URL.createObjectURL(file)}
          className=" aspect-square w-24 cursor-pointer rounded-xl object-contain"
        />
      ) : file.type.includes("pdf") ? (
        <img src={URL.createObjectURL(file)} />
      ) : null}
      <p className=" w-24 truncate break-all text-xs ">{fileName}</p>
    </div>
  );
};
export default Uploadedfile;
