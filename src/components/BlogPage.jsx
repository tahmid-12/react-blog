import React, { useEffect, useState } from 'react'
import BlogCard from './BlogCard';
import Pagination from './Pagination';

const BlogPage = () => {
  const [blogs, setBlogs] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 12;
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [activeCategory, setActiveCategory] = useState(null);

  useEffect(() => {

    async function fetchBlogs(){
      let url = `http://localhost:3000/data?page=${currentPage}&limit=${pageSize}`;
      
      //Filter by Category
      if(selectedCategory){
        url += `&category=${selectedCategory}`;
      }

      const response = await fetch(url);
      const data = await response.json();
      setBlogs(data);
    }

    fetchBlogs();
  },[currentPage, pageSize, selectedCategory]);

  // Change page
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  }

  const handlePageCategory = (category) => {
    setSelectedCategory(category);
    setCurrentPage(1);
    setActiveCategory(category)
  }

  return (
    <div>
      <div>Page Category</div>

      {/* Bolg Cards Section */}
      <div>
        <BlogCard blogs={blogs} currentPage={currentPage} selectedCategory={selectedCategory} pageSize={pageSize}/>
      </div>

      {/* Pagination */}
      <div>
        <Pagination onPageChange={handlePageChange} currentPage={currentPage} blogs={blogs} pageSize={pageSize}/>
      </div>
    </div>
  )
}

export default BlogPage