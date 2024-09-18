// src/components/QuestionCard.jsx
import React from 'react';

const QuestionCard = ({ question, options, onOptionChange, addOption, removeQuestion }) => {
  return (
    <div className="relative p-6 bg-white border border-gray-200 rounded-lg shadow-lg mb-6">
      <input
        type="text"
        value={question}
        onChange={(e) => onOptionChange('question', e.target.value)}
        placeholder="Enter your question"
        className="w-full mb-4 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300 ease-in-out"
      />
      {options.map((option, index) => (
        <div key={index} className="mb-4">
          <input
            type="text"
            value={option}
            onChange={(e) => onOptionChange(`option-${index}`, e.target.value)}
            placeholder={`Option ${index + 1}`}
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300 ease-in-out"
          />
        </div>
      ))}
      <div className="flex justify-between space-x-4 mb-4">
        <button
          onClick={addOption}
          className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition-colors duration-300 ease-in-out"
        >
          Add Option
        </button>
        <button
          onClick={removeQuestion}
          className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition-colors duration-300 ease-in-out"
        >
          Remove Question
        </button>
      </div>
    </div>
  );
};

export default QuestionCard;
