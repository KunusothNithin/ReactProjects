// src/components/BlogList.jsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { FaSpinner } from 'react-icons/fa';

const BlogList = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const res = await axios.get('http://localhost:5000/api/blogs'); // Update with correct URL
        console.log('API response:', res.data);
        if (Array.isArray(res.data)) {
          setBlogs(res.data);
        } else {
          console.error('Unexpected API response:', res.data);
          setError('Unexpected response from server');
        }
      } catch (error) {
        console.error('Error fetching blogs:', error);
        setError('Failed to fetch blogs');
      }
    };
    
    fetchBlogs();
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <FaSpinner className="animate-spin text-blue-500 h-12 w-12" />
      </div>
    );
  }

  if (error) {
    return <p className="text-red-500">{error}</p>;
  }

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h2 className="text-3xl font-bold mb-6">All Blogs</h2>
      <div>
        {Array.isArray(blogs) && blogs.length > 0 ? (
          blogs.map(blog => (
            <div key={blog._id} className="p-6 bg-gray-100 mb-6 rounded-lg shadow-md hover:bg-gray-200 transition duration-300">
              <Link to={`/blogs/${blog._id}`} className="no-underline text-black">
                <h3 className="text-2xl font-semibold mb-2">{blog.title}</h3>
                <p className="text-gray-700 mb-2">{blog.excerpt || blog.content.slice(0, 100) + '...'}</p>
                <p className="text-sm text-gray-500">By {blog.author.username}</p>
              </Link>
            </div>
          ))
        ) : (
          <p>No blogs available.</p>
        )}
      </div>
    </div>
  );
};

export default BlogList;
