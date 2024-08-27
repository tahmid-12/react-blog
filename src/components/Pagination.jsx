import React from 'react';

const Pagination = ({ onPageChange, currentPage, totalBlogs, pageSize }) => {
  const totalPages = Math.ceil(totalBlogs / pageSize);

  const renderPaginationLinks = () => {
    return Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNumber) => (
      <li 
        key={pageNumber} 
        className={`mx-1 ${pageNumber === currentPage ? "bg-blue-500 text-white" : "bg-white text-blue-500"} 
        border border-blue-500 rounded px-3 py-1 cursor-pointer hover:bg-blue-100`}
      >
        <a 
          href="#" 
          onClick={(e) => { 
            e.preventDefault(); 
            onPageChange(pageNumber); 
          }}
        >
          {pageNumber}
        </a>
      </li>
    ));
  };

  return (
    <div className="flex items-center justify-center my-4">
      <button 
        onClick={() => onPageChange(1)} 
        disabled={currentPage === 1}
        className="px-4 py-2 mx-1 text-white bg-blue-500 rounded hover:bg-blue-600 disabled:bg-gray-300"
      >
        First
      </button>
      <button 
        onClick={() => onPageChange(currentPage - 1)} 
        disabled={currentPage === 1}
        className="px-4 py-2 mx-1 text-white bg-blue-500 rounded hover:bg-blue-600 disabled:bg-gray-300"
      >
        Previous
      </button>
      <ul className="flex items-center">
        {renderPaginationLinks()}
      </ul>
      <button 
        onClick={() => onPageChange(currentPage + 1)} 
        disabled={currentPage === totalPages}
        className="px-4 py-2 mx-1 text-white bg-blue-500 rounded hover:bg-blue-600 disabled:bg-gray-300"
      >
        Next
      </button>
      <button 
        onClick={() => onPageChange(totalPages)} 
        disabled={currentPage === totalPages}
        className="px-4 py-2 mx-1 text-white bg-blue-500 rounded hover:bg-blue-600 disabled:bg-gray-300"
      >
        Last
      </button>
    </div>
  );
};

export default Pagination;