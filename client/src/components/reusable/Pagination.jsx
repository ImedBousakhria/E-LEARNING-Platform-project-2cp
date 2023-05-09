import React from "react";
import { useState } from "react";

const Pagination = ({
  array,
  postsPerPage,
  children,
  map
}) => {
  const [currentPage, setCurrentPage] = useState(1);

  const lastPostIndex = currentPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;

  const currentPosts = array.slice(firstPostIndex, lastPostIndex);
  const isPrevDisabled = currentPage === 1;
  const isNextDisabled = lastPostIndex >= array.length;

  const handleNextClick = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const handlePrevClick = () => {
    setCurrentPage((prevPage) => prevPage - 1);
  };

  {currentPosts.map((Element, index) => {
    return children
        {/* <Announcementelement
          isDisplayed={false}
          onClick={() => {
            setActiveCardIndex(index);
            setBarContent(Element);
            setContentToEdit(Element);
          }}
          isActive={activeCardIndex === index && barContent !== null}
          profilepicture={Element.profilepicture}
          person={Element.person}
          content={Element.content}
          image={Element.image}
        /> */}

  })}
};
export default Pagination;

/*const lastPostIndex = currentPage * postsPerPage;
    const firstPostIndex = lastPostIndex - postsPerPage;
    const currentPosts = data.slice(firstPostIndex, lastPostIndex);
    
    const isPrevDisabled = currentPage === 1;
    const isNextDisabled = lastItemIndex >= data.length;

    const handleNextClick = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const handlePrevClick = () => {
    setCurrentPage((prevPage) => prevPage - 1);
  };


   <div>
        <button onClick={handlePrevClick} disabled={isPrevDisabled}>
          Prev
        </button>
        <button onClick={handleNextClick} disabled={isNextDisabled}>
          Next
        </button>
      </div>
    
    
    */







      

  /*     import React, { useState } from 'react';

function Pagination({ items, postsPerPage, onPageChange }) {
  const [currentPage, setCurrentPage] = useState(1);

  const lastPostIndex = currentPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;

  const currentPosts = items.slice(firstPostIndex, lastPostIndex);
  const isPrevDisabled = currentPage === 1;
  const isNextDisabled = lastPostIndex >= items.length;

  const handleNextClick = () => {
    setCurrentPage((prevPage) => prevPage + 1);
    onPageChange(currentPage + 1);
  };

  const handlePrevClick = () => {
    setCurrentPage((prevPage) => prevPage - 1);
    onPageChange(currentPage - 1);
  };

  return (
    <div className="flex justify-center items-center">
      <button
        disabled={isPrevDisabled}
        onClick={handlePrevClick}
        className="px-4 py-2 border rounded-md mr-2 hover:bg-gray-100"
      >
        Prev
      </button>
      <button
        disabled={isNextDisabled}
        onClick={handleNextClick}
        className="px-4 py-2 border rounded-md hover:bg-gray-100"
      >
        Next
      </button>
    </div>
  );
}

export default Pagination; */