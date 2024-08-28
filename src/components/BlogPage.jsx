import React, { useEffect, useState } from 'react';
import BlogCard from './BlogCard';
import Pagination from './Pagination'; 
import CategorySelector from './CategorySelector';

const BlogPage = () => {
  const [blogs, setBlogs] = useState([]);
  const [displayedBlogs, setDisplayedBlogs] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalBlogs, setTotalBlogs] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const pageSize = 12;

  const categories = ["Startups", "Security", "AI", "Apps", "Tech"];

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

  // useEffect(() => {
  //   const start = (currentPage - 1) * pageSize;
  //   const end = start + pageSize;
  //   setDisplayedBlogs(blogs.slice(start, end));
  // }, [currentPage, blogs]);

  useEffect(() => {
    const filteredBlogs = selectedCategory
      ? blogs.filter(blog => blog.category === selectedCategory)
      : blogs;

    setTotalBlogs(filteredBlogs.length);
    const start = (currentPage - 1) * pageSize;
    const end = start + pageSize;
    setDisplayedBlogs(filteredBlogs.slice(start, end));
  }, [currentPage, selectedCategory, blogs]);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    setCurrentPage(1); 
  };


  return (
    <div>
      <div>
        <CategorySelector categories={categories} selectedCategory={selectedCategory} onSelectCategory={handleCategoryChange}/>
      </div>

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