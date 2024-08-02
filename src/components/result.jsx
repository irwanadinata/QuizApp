import React from "react";
import UsernameDisplay from "./username-display";

const Result = ({ score, totalQuestions, totalAnswered }) => {
  const incorrectAnswers = totalAnswered - score;

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-6 rounded shadow-md ">
      <UsernameDisplay say={"Thank you"}/>
        <h2 className="text-2xl font-semibold mb-4 px-12">Your Results</h2>
        <p className="mb-4 pl-3">Correct Answers: {score}</p>
        <p className="mb-4 pl-3">Incorrect Answers: {incorrectAnswers}</p>
        <p className="mb-4 pl-3">Total Answered: {totalAnswered}</p>
        <p className="mb-4 pl-3">Total Questions: {totalQuestions}</p>
      </div>
    </div>
  );
};

export default Result;
