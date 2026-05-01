import React from "react";
import UsernameDisplay from "./username-display";
import ThemeToggle from "./theme-toggle";
import { motion } from "framer-motion";
import { Trophy, Target, XCircle, CheckCircle, RotateCcw } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Result = ({ score, totalQuestions, totalAnswered }) => {
  const incorrectAnswers = totalAnswered - score;
  const navigate = useNavigate();

  const percentage = Math.round((score / totalQuestions) * 100) || 0;

  const StatCard = ({ icon: Icon, label, value, colorClass }) => (
    <div className="bg-slate-100 dark:bg-slate-900/50 p-4 rounded-2xl border border-slate-200 dark:border-white/5 flex items-center gap-4 transition-colors duration-500">
      <div className={`p-3 rounded-xl ${colorClass}`}>
        <Icon className="w-6 h-6" />
      </div>
      <div>
        <p className="text-slate-500 dark:text-slate-400 text-sm font-medium transition-colors duration-500">
          {label}
        </p>
        <p className="text-slate-800 dark:text-white font-bold text-xl transition-colors duration-500">
          {value}
        </p>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50 dark:bg-slate-950 p-4 relative overflow-hidden transition-colors duration-500">
      <div className="absolute top-[-10%] left-[-10%] w-96 h-96 bg-amber-600 rounded-full mix-blend-multiply filter blur-3xl opacity-0 dark:opacity-10 animate-blob transition-opacity duration-500"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-96 h-96 bg-yellow-600 rounded-full mix-blend-multiply filter blur-3xl opacity-0 dark:opacity-10 animate-blob animation-delay-2000 transition-opacity duration-500"></div>

      <div className="w-full max-w-2xl relative z-10">
        <div className="flex justify-between items-center mb-6">
          <UsernameDisplay say={"Great job"} />
          <ThemeToggle />
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="bg-white/60 dark:bg-white/10 backdrop-blur-xl border border-slate-200 dark:border-white/20 p-8 md:p-12 rounded-3xl shadow-2xl text-center transition-colors duration-500"
        >
          <div className="inline-block p-4 rounded-full bg-gradient-to-r from-yellow-400 to-amber-600 mb-6 shadow-lg shadow-amber-500/20">
            <Trophy className="w-12 h-12 text-white" />
          </div>

          <h2 className="text-3xl font-bold text-slate-800 dark:text-white mb-2 transition-colors duration-500">
            Quiz Completed!
          </h2>
          <p className="text-slate-600 dark:text-slate-300 mb-8 transition-colors duration-500">
            Here's how you did
          </p>

          <div className="flex justify-center mb-10">
            <div className="relative w-40 h-40 flex items-center justify-center">
              <svg
                className="w-full h-full transform -rotate-90"
                viewBox="0 0 36 36"
              >
                <path
                  className="text-slate-200 dark:text-slate-800 transition-colors duration-500"
                  strokeWidth="3"
                  stroke="currentColor"
                  fill="none"
                  d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                />
                <motion.path
                  initial={{ strokeDasharray: "0, 100" }}
                  animate={{ strokeDasharray: `${percentage}, 100` }}
                  transition={{ duration: 1.5, ease: "easeOut" }}
                  className={`${percentage > 50 ? "text-green-500" : "text-orange-500"}`}
                  strokeWidth="3"
                  strokeLinecap="round"
                  stroke="currentColor"
                  fill="none"
                  d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                />
              </svg>
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <span className="text-4xl font-bold text-slate-800 dark:text-white transition-colors duration-500">
                  {percentage}%
                </span>
                <span className="text-xs text-slate-500 dark:text-slate-400 font-medium uppercase tracking-wider mt-1 transition-colors duration-500">
                  Score
                </span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8 text-left">
            <StatCard
              icon={Target}
              label="Total Questions"
              value={totalQuestions}
              colorClass="bg-blue-100 dark:bg-blue-500/20 text-blue-600 dark:text-blue-400"
            />
            <StatCard
              icon={CheckCircle}
              label="Correct Answers"
              value={score}
              colorClass="bg-green-100 dark:bg-green-500/20 text-green-600 dark:text-green-400"
            />
            <StatCard
              icon={XCircle}
              label="Incorrect Answers"
              value={incorrectAnswers}
              colorClass="bg-red-100 dark:bg-red-500/20 text-red-600 dark:text-red-400"
            />
            <StatCard
              icon={Target}
              label="Attempted"
              value={totalAnswered}
              colorClass="bg-amber-100 dark:bg-amber-500/20 text-amber-600 dark:text-amber-400"
            />
          </div>

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => (window.location.href = "/")}
            className="w-full sm:w-auto mx-auto bg-gradient-to-r from-amber-500 to-yellow-500 text-slate-900 font-bold py-3 px-8 rounded-xl shadow-lg hover:shadow-amber-500/25 flex items-center justify-center gap-2 transition-all duration-500"
          >
            <RotateCcw className="w-5 h-5" />
            <span>Play Again</span>
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
};

export default Result;
