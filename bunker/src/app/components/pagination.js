import React from "react";

const Pagination = ({ totalPages, currentPage, onPageChange }) => {
  const pageNumbers = [];
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="flex justify-center mt-4">
      {pageNumbers.map((number) => (
        <button
          key={number}
          onClick={() => onPageChange(number)}
          className={`mx-2 px-4 py-2 bg-yellow-100 text-red-800 rounded ${
            currentPage === number ? "font-bold" : ""
          }`}
        >
          {number}
        </button>
      ))}
    </div>
  );
};

export default Pagination;
