
import React from 'react';
import Cards from '../molecules/Cards';
import Sidebar from '../molecules/Sidebar';
import '../../styles/BlogList.css'

const BlogList = () => {
  const blogs = [
    {
      id: 1,
      title: 'xyz',
      description: 'xyz',
      date: '2025-01-01',
    },
    {
      id: 2,
      title: 'abc',
      description: 'abc',
      date: '2025-06-13',
    },
  ];

  return (
    <div className="blog">
      <Sidebar/>
      <h2>Blog List</h2>
      {blogs.map((blog) => (
        <Cards
          key={blog.id}
          title={blog.title}
          description={blog.description}
          date={blog.date}
        />
      ))}
    </div>
  );
};

export default BlogList;
