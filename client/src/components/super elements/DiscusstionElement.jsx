import React from 'react'

const DiscusstionElement = ({element}) => {
  return (
    <div className='flex gap-1'>
      <div>
        <img src={element.profile} />
      </div>
      <div className='flex flex-col'>
        <div className='text-[0.9rem]'>
          <p>{element.name}</p>
        </div>
        <div className='bg-white rounded-[0.75rem] p-2 rounded-tl-[0px] text-[0.75rem] '>
          <p>{element.text}</p>
        </div>
      </div>
    </div>
  );
}

export default DiscusstionElement