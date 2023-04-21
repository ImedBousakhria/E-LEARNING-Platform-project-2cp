import React from 'react'

const Filesdisplays = ({images}) => {
  return (
    <>
      {images.map((Element) => (
        <div className="w-[100px] aspect-square">
          <img className="w-full object-cover" src={Element} />
        </div>
      ))}
    </>
  );
}

export default Filesdisplays