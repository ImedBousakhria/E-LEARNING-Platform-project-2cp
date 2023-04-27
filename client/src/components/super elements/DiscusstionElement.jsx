import React from 'react'

const DiscusstionElement = ({element}) => {
  return (
    <div className="flex gap-1 ">
      <div>
        <img src={element.profile} />
      </div>
      <div className="flex flex-col">
        <div className="text-[0.9rem]">
          <p>{element.name}</p>
        </div>
        <div className=" rounded-[0.75rem]   rounded-tl-[0px] bg-white p-2 text-[0.75rem] ">
          <p className=" max-w-[15ch] break-words ">{element.text}</p>
        </div>
      </div>
    </div>
  );
}

export default DiscusstionElement