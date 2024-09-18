// src/components/BlogForm.jsx
import React, { useState } from 'react';

const BlogForm = ({ initialData, onSubmit }) => {
  const [title, setTitle] = useState(initialData?.title || '');
  const [content, setContent] = useState(initialData?.content || '');
  const [category, setCategory] = useState(initialData?.category || '');
  const [tags, setTags] = useState(initialData?.tags || '');
  const [imageURL, setImageURL] = useState(initialData?.imageURL || '');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ title, content, category, tags, imageURL });
  };

  return (
    <div className="p-6 bg-white rounded-lg shadow-lg max-w-lg mx-auto mt-10">
      <h2 className="text-2xl text-center font-semibold mb-6 text-gray-800">Create a New Blog Post</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-5">
          <label className="block text-sm font-medium text-gray-700 mb-2">Title:</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="block w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500"
            placeholder="Enter blog title"
          />
        </div>
        <div className="mb-5">
          <label className="block text-sm font-medium text-gray-700 mb-2">Content:</label>
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="block w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500"
            rows="8"
            placeholder="Write your blog content here"
          ></textarea>
        </div>
        <div className="mb-5">
          <label className="block text-sm font-medium text-gray-700 mb-2">Category:</label>
          <input
            type="text"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="block w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500"
            placeholder="Enter blog category"
          />
        </div>
        <div className="mb-5">
          <label className="block text-sm font-medium text-gray-700 mb-2">Tags (comma-separated):</label>
          <input
            type="text"
            value={tags}
            onChange={(e) => setTags(e.target.value)}
            className="block w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500"
            placeholder="Enter tags"
          />
        </div>
        <div className="mb-5">
          <label className="block text-sm font-medium text-gray-700 mb-2">Image URL:</label>
          <input
            type="url"
            value={imageURL}
            onChange={(e) => setImageURL(e.target.value)}
            className="block w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500"
            placeholder="Enter image URL"
          />
        </div>
        <div className="flex justify-center">
          <button
            type="submit"
            className="bg-blue-600 text-white px-5 py-2 rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default BlogForm;
