// src/pages/EditBlog.jsx
import React, { useEffect, useState } from 'react';
import BlogForm from '../components/BlogForm';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

const EditBlog = () => {
  const { id } = useParams();
  const [initialData, setInitialData] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchBlog = async () => {
      const res = await axios.get(`/api/blogs/${id}`);
      setInitialData(res.data);
    };
    fetchBlog();
  }, [id]);

  const handleEditBlog = async (blogData) => {
    await axios.put(`/api/blogs/${id}`, blogData, {
      headers: { Authorization: localStorage.getItem('token') },
    });
    navigate(`/blogs/${id}`);
  };

  if (!initialData) return <div>Loading...</div>;

  return <BlogForm initialData={initialData} onSubmit={handleEditBlog} />;
};

export default EditBlog;
