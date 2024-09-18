// src/pages/CreateQuiz.jsx
import React, { useState } from 'react';
import QuestionCard from '../components/QuestionCard';

const CreateQuiz = () => {
  const [questions, setQuestions] = useState([{ question: '', options: [''] }]);

  const addQuestion = () => {
    setQuestions([...questions, { question: '', options: [''] }]);
  };

  const handleQuestionChange = (index, field, value) => {
    const updatedQuestions = [...questions];
    if (field === 'question') {
      updatedQuestions[index].question = value;
    } else {
      const optionIndex = parseInt(field.split('-')[1]);
      updatedQuestions[index].options[optionIndex] = value;
    }
    setQuestions(updatedQuestions);
  };

  const addOptionToQuestion = (index) => {
    const updatedQuestions = [...questions];
    updatedQuestions[index].options.push('');
    setQuestions(updatedQuestions);
  };

  const removeQuestion = (index) => {
    const updatedQuestions = questions.filter((_, qIndex) => qIndex !== index);
    setQuestions(updatedQuestions);
  };

  return (
    <div className="container mx-auto p-4 md:p-6 lg:p-8 bg-white rounded-lg shadow-lg max-w-4xl">
      <h2 className="text-4xl font-extrabold text-gray-900 mb-6 text-center">Create a New Quiz</h2>
      <div className="space-y-4">
        {questions.map((q, index) => (
          <div key={index} className="flex flex-col space-y-4">
            <QuestionCard
              question={q.question}
              options={q.options}
              onOptionChange={(field, value) => handleQuestionChange(index, field, value)}
              addOption={() => addOptionToQuestion(index)}
              removeQuestion={() => removeQuestion(index)}
            />
          </div>
        ))}
      </div>
      <div className="flex justify-center">
      <button
        onClick={addQuestion}
        className="bg-teal-500 text-white px-6 py-3 rounded-lg mt-6 hover:bg-teal-600 transition-colors duration-300 ease-in-out"
      >
        Add Question
      </button>
      </div>
    </div>
  );
};

export default CreateQuiz;
