import React from 'react'
import fileholder from '../../assets/images/fileholder.svg' ; 
import deletequestion from '../../assets/icons/deletequetion.svg' ; 

const Filesdisplays = ({ files, handleDeleteFile }) => {
  const handleClick = (e, index) => {
    e.preventDefault(); 
    handleDeleteFile(
      files.filter((Element,i) => {
        return index != i ; 
      })
    )
  }
  return (
    <>
      {files.map((Element, index) => (
        <div className="flex aspect-square w-[100px] flex-col gap-1 ">
          <button onClick={(e)=> handleClick(e, index)}>
            <img src={deletequestion} />
          </button>
          <img className="w-full object-cover" src={fileholder} />
          <span className="max-w-[10ch] overflow-hidden">{Element.name}</span>
        </div>
      ))}
    </>
  );
};

export default Filesdisplays