import React, { useEffect, useState } from 'react';
import BlogCard from './BlogCard';
import Pagination from './Pagination'; 

const BlogPage = () => {
  const [blogs, setBlogs] = useState([]);
  const [displayedBlogs, setDisplayedBlogs] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalBlogs, setTotalBlogs] = useState(0);
  const pageSize = 12;

  useEffect(() => {
    async function fetchBlogs() {
      let url = `http://localhost:3000/data`; 

      const response = await fetch(url);
      const data = await response.json();

      console.log("Fetched Data:", data); 

      setBlogs(data);        
      setTotalBlogs(data.length);  
      setDisplayedBlogs(data.slice(0, pageSize)); 
    }

    fetchBlogs();
  }, []);

  useEffect(() => {
    const start = (currentPage - 1) * pageSize;
    const end = start + pageSize;
    setDisplayedBlogs(blogs.slice(start, end));
  }, [currentPage, blogs]);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div>
      {/* <div>
        <button onClick={() => handlePageChange(1)} disabled={currentPage === 1}>First Page</button>
        <button 
          onClick={() => handlePageChange(currentPage - 1)} 
          disabled={currentPage === 1}
        >
          Previous
        </button>
        <button 
          onClick={() => handlePageChange(currentPage + 1)} 
          disabled={currentPage * pageSize >= totalBlogs}
        >
          Next
        </button>
        <button 
          onClick={() => handlePageChange(Math.ceil(totalBlogs / pageSize))} 
          disabled={currentPage === Math.ceil(totalBlogs / pageSize)}
        >
          Last Page
        </button>
      </div> */}

      {/* Blog Cards Section */}
      <div>
        <BlogCard blogs={displayedBlogs} />
      </div>

      {/* Pagination */}
      <Pagination 
        onPageChange={handlePageChange} 
        currentPage={currentPage} 
        totalBlogs={totalBlogs} 
        pageSize={pageSize} 
      />
    </div>
  );
};

export default BlogPage;