import React, { useEffect, useState } from 'react'
import BlogCard from './BlogCard';

const BlogPage = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {

    async function fetchBlogs(){
      let url = `http://localhost:3000/data`;

      const response = await fetch(url);
      const data = await response.json();
      setBlogs(data);
    }

    fetchBlogs();
  },[]);


  return (
    <div>
      <div>Page Category</div>

      {/* Bolg Cards Section */}
      <div>
        <BlogCard blogs={blogs}/>
      </div>

      {/* Pagination */}
      <div></div>
    </div>
  )
}

export default BlogPage