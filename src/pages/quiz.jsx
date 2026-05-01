import React, { useState, useEffect } from "react";
import { getQuestions } from "../utils/api/api";
import Question from "../components/question";
import Result from "../components/result";
import Countdown from "react-countdown";
import Error from "../components/error";
import Loading from "../components/loading";
import UsernameDisplay from "../components/username-display";
import ThemeToggle from "../components/theme-toggle";
import { Timer, BrainCircuit } from "lucide-react";
import { motion } from "framer-motion";

const Quiz = () => {
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [totalAnswered, setTotalAnswered] = useState(0);
  const [quizEnded, setQuizEnded] = useState(false);
  const [error, setError] = useState(null);
  const [totalTime] = useState(180000);
  const [endTime, setEndTime] = useState(Date.now() + totalTime);

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const questions = await getQuestions();
        setQuestions(questions);
        setEndTime(Date.now() + totalTime);
      } catch (error) {
        setError("Failed to load questions. Please try again later.");
      }
    };
    fetchQuestions();
  }, [totalTime]);

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
        <span className="font-mono text-xl font-bold tracking-wider text-amber-500 dark:text-amber-400">
          {String(minutes).padStart(2, "0")}:{String(seconds).padStart(2, "0")}
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

  const progressPercentage = (currentQuestionIndex / questions.length) * 100;

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-slate-50 dark:bg-slate-950 p-4 relative overflow-hidden transition-colors duration-500">
      <div className="absolute top-[-10%] left-[-10%] w-96 h-96 bg-amber-600 rounded-full mix-blend-multiply filter blur-3xl opacity-0 dark:opacity-10 animate-blob transition-opacity duration-500"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-96 h-96 bg-yellow-600 rounded-full mix-blend-multiply filter blur-3xl opacity-0 dark:opacity-10 animate-blob animation-delay-2000 transition-opacity duration-500"></div>

      <div className="w-full max-w-2xl relative z-10">
        <div className="flex justify-between items-center mb-6">
          <UsernameDisplay say={"Good luck"} />
          <ThemeToggle />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white/60 dark:bg-white/10 backdrop-blur-xl border border-slate-200 dark:border-white/20 p-8 rounded-3xl shadow-2xl transition-colors duration-500"
        >
          <div className="flex flex-wrap gap-4 items-center justify-between mb-8 pb-6 border-b border-slate-200 dark:border-white/10 transition-colors duration-500">
            <div className="flex items-center gap-3">
              <div className="bg-amber-100 dark:bg-amber-500/20 p-2 rounded-xl transition-colors duration-500">
                <BrainCircuit className="w-6 h-6 text-amber-500 dark:text-amber-400" />
              </div>
              <div>
                <p className="text-sm text-slate-500 dark:text-slate-400 font-medium mb-1 transition-colors duration-500">
                  Progress
                </p>
                <div className="text-slate-800 dark:text-white font-semibold transition-colors duration-500">
                  Question {currentQuestionIndex + 1}{" "}
                  <span className="text-slate-400 dark:text-slate-500">
                    / {questions.length}
                  </span>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-3 bg-slate-100 dark:bg-slate-900/50 px-4 py-2 rounded-2xl border border-slate-200 dark:border-white/5 transition-colors duration-500">
              <Timer className="w-5 h-5 text-amber-500 dark:text-amber-400" />
              <Countdown date={endTime} renderer={renderer} />
            </div>
          </div>

          <div className="w-full bg-slate-200 dark:bg-slate-800/50 rounded-full h-2 mb-8 overflow-hidden transition-colors duration-500">
            <motion.div
              className="bg-gradient-to-r from-amber-500 to-yellow-500 h-2 rounded-full"
              initial={{ width: 0 }}
              animate={{ width: `${progressPercentage}%` }}
              transition={{ duration: 0.3 }}
            />
          </div>

          {questions.length > 0 && currentQuestionIndex < questions.length && (
            <Question
              question={questions[currentQuestionIndex]}
              handleAnswer={handleAnswer}
            />
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default Quiz;
