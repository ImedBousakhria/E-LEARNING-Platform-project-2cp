import React from 'react'
import eye from '../../assets/icons/eye.svg' ; 

const View = ({ handleClickView }) => {
  return (
    <div
      onClick={handleClickView}
      className="min-h-full rounded-[5px] border border-accent p-1 text-accent"
    >
      <img src={eye} />
    </div>
  );
};

export default View