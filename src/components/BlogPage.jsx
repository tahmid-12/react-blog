import React, { useEffect, useState } from 'react'

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

  if (blogs.length > 0) {
    console.log(blogs);
  }

  return (
    <div>Blog Page</div>
  )
}

export default BlogPage