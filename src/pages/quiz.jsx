import React, { useState, useEffect } from "react";
import { getQuestions } from "../utils/api/api";
import Question from "../components/question";
import Result from "../components/result";
import Countdown from "react-countdown";
import Error from "../components/error";
import Loading from "../components/loading";
import UsernameDisplay from "../components/username-display";

const Quiz = () => {
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [totalAnswered, setTotalAnswered] = useState(0);
  const [quizEnded, setQuizEnded] = useState(false);
  const [error, setError] = useState(null);
  const [totalTime] = useState(60000);
  const [endTime, setEndTime] = useState(Date.now() + totalTime);

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const questions = await getQuestions();
        setQuestions(questions);
      } catch (error) {
        setError("Failed to load questions. Please try again later.");
      }
    };
    fetchQuestions();
  }, []);

  if (error) {
    return <Error error={error} />;
  }

  const handleAnswer = (isCorrect) => {
    setTotalAnswered(totalAnswered + 1);
    if (isCorrect) {
      setScore(score + 1);
    }
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setQuizEnded(true);
    }
  };

  // Jika timer habis, tampilkan hasil
  const Completionist = () => (
    <Result
      score={score}
      totalQuestions={questions.length}
      totalAnswered={totalAnswered}
    />
  );

  const renderer = ({ minutes, seconds, completed }) => {
    if (completed) {
      setQuizEnded(true);
      return <Completionist />;
    } else {
      return (
        <span>
          {minutes}:{seconds}
        </span>
      );
    }
  };

  if (!questions.length) {
    return <Loading />;
  }

  if (quizEnded) {
    return <Completionist />;
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <div className="bg-white p-6 rounded shadow-md w-full max-w-md">
      <UsernameDisplay say={"Welcome"}/>
        <div className="text-center mb-4">
          Time Remaining:{" "}
          <Countdown date={endTime} renderer={renderer} />
        </div>
        {questions.length > 0 && currentQuestionIndex < questions.length && (
          <Question
            question={questions[currentQuestionIndex]}
            handleAnswer={handleAnswer}
          />
        )}
        <div className="text-center mt-4">
          Question {currentQuestionIndex + 1} of {questions.length}
        </div>
      </div>
    </div>
  );
};

export default Quiz;
