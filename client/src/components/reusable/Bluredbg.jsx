import React from 'react'

const Bluredbg = ({type}) => {
  return (
    <div className={`absolute top-0 right-0 left-0 bottom-0 z-${type=="search"?20:10} bg-darkgray opacity-80 blur-[2px]`}></div>
  );
}

export default Bluredbg