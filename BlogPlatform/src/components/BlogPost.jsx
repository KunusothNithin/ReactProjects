// src/components/BlogPost.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';

const BlogPost = ({ title, content, author, date, tags, imageURL }) => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/');
    };

    return (
        <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-md">
            <div className="mb-6">
                {imageURL && <img src={imageURL} alt={title} className="w-full h-auto rounded-lg mb-4" />}
                <h1 className="text-3xl font-bold mb-2">{title}</h1>
                <p className="text-gray-600 mb-4">By {author} on {new Date(date).toLocaleDateString()}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                    {tags.map((tag, index) => (
                        <span key={index} className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded-full">
                            {tag}
                        </span>
                    ))}
                </div>
                <p className="text-lg leading-relaxed mb-6">{content}</p>
            </div>
            <div className="flex justify-center">
                <button 
                    onClick={handleClick}
                    className="bg-blue-500 text-white px-6 py-3 rounded-md shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                    Back to Home
                </button>
            </div>
        </div>
    );
};

export default BlogPost;
