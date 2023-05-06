import React from "react";
import { useState } from "react";

const Pagination = ({
  array,
  postsPerPage,
  setCurrentPage,
  currentPage,
  setCurrentPage
}) => {
  const lastPostIndex = currentPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;

  const currentPosts = array.slice(firstPostIndex, lastPostIndex);
  const isPrevDisabled = currentPage === 1;
  const isNextDisabled = lastPostIndex >= items.length;

  const handleNextClick = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const handlePrevClick = () => {
    setCurrentPage((prevPage) => prevPage - 1);
  };
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
