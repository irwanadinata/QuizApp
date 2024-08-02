import React from "react";

const Question = ({ question, handleAnswer }) => {
  const { question: text, correct_answer, incorrect_answers } = question;
  const options = [correct_answer, ...incorrect_answers].sort(
    () => Math.random() - 0.5
  );

  return (
    <div>
      <h2 className="text-lg font-semibold mb-4">{text}</h2>
      {options.map((option, index) => (
        <button
          key={index}
          onClick={() => handleAnswer(option === correct_answer)}
          className="block w-full p-2 mb-2 border border-gray-300 rounded hover:bg-gray-200"
        >
          {option}
        </button>
      ))}
    </div>
  );
};

export default Question;
