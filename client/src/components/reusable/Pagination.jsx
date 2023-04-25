import React from "react";

const Pagination = ({
  totalPosts,
  postsPerPage,
  setCurrentPage,
  currentPage,
}) => {
  let pages = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pages.push(i);
  }

  return (
    <div className="">
      {pages.map((page, index) => {
        return (
          <button
            key={index}
            onClick={() => setCurrentPage(page)}
            className={page == currentPage ? "" : ""}
          >
            {page}
          </button>
        );
      })}
    </div>
  );
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
