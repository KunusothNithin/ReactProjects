// src/pages/CreateBlog.jsx
import React from 'react';
import BlogForm from '../components/BlogForm';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { FaPen } from 'react-icons/fa'; // Importing a pen icon

const CreateBlog = () => {
  const navigate = useNavigate();

  const handleCreateBlog = async (blogData) => {
    await axios.post('/api/blogs', blogData, {
      headers: { Authorization: localStorage.getItem('token') },
    });
    navigate('/');
  };

  return (
    <div className="p-6 max-w-2xl mx-auto bg-white rounded-lg shadow-lg">
      <div className="flex flex-col items-center mb-6">
        <FaPen className="text-5xl text-blue-600 mb-3" /> {/* Icon on top */}
        <h1 className="text-3xl font-bold text-center">Create a New Blog Post</h1>
      </div>
      <BlogForm onSubmit={handleCreateBlog} />
    </div>
  );
};

export default CreateBlog;
