import React, { useEffect, useState } from 'react';
import Cards from '../molecules/Cards';
import Sidebar from '../molecules/Sidebar';
import '../../styles/BlogList.css';
import axios from 'axios';

const BlogList = () => {
  const [blogs, setBlogs] = useState<any[]>([]);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/posts')
      .then((res) => setBlogs(res.data)) 
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="blog">
      <Sidebar />
      <h2>Blog List</h2>
      {blogs.length > 0 ? (
        blogs.map((blog) => (
          <Cards
            key={blog.id}
            title={blog.title}
            description={blog.body}
            date={`Post ID: ${blog.id}`}
          />
        ))
      ) : (
        <p>No Blogs</p>
      )}
    </div>
  );
};

export default BlogList;
