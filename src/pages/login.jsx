import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Sparkles, ArrowRight } from "lucide-react";
import ThemeToggle from "../components/theme-toggle";

const Login = () => {
  const [username, setUsername] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    if (!username.trim()) return;
    localStorage.setItem("username", username);
    navigate("/quiz");
  };

  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden bg-slate-50 dark:bg-slate-950 transition-colors duration-500">
      <div className="absolute top-0 -left-4 w-72 h-72 bg-amber-500 rounded-full mix-blend-multiply filter blur-xl opacity-0 dark:opacity-20 animate-blob transition-opacity duration-500"></div>
      <div className="absolute top-0 -right-4 w-72 h-72 bg-yellow-500 rounded-full mix-blend-multiply filter blur-xl opacity-0 dark:opacity-20 animate-blob animation-delay-2000 transition-opacity duration-500"></div>
      <div className="absolute -bottom-8 left-20 w-72 h-72 bg-orange-500 rounded-full mix-blend-multiply filter blur-xl opacity-0 dark:opacity-20 animate-blob animation-delay-4000 transition-opacity duration-500"></div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md p-8 relative z-10"
      >
        <div className="flex justify-end mb-4">
          <ThemeToggle />
        </div>
        <div className="bg-white/60 dark:bg-white/10 backdrop-blur-xl border border-slate-200 dark:border-white/20 p-8 rounded-3xl shadow-2xl transition-colors duration-500">
          <div className="flex justify-center mb-6">
            <div className="bg-amber-100 dark:bg-amber-500/20 p-3 rounded-2xl border border-amber-200 dark:border-amber-500/30 transition-colors duration-500">
              <Sparkles className="w-8 h-8 text-amber-500 dark:text-amber-400" />
            </div>
          </div>

          <h1 className="text-3xl mb-2 text-center font-bold text-slate-800 dark:text-white tracking-tight transition-colors duration-500">
            Welcome to Quizzy
          </h1>
          <p className="text-slate-500 dark:text-slate-400 text-center mb-8 transition-colors duration-500">
            Enter your name to start the challenge
          </p>

          <form onSubmit={handleLogin} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2 transition-colors duration-500">
                Your Name
              </label>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Your Name"
                className="w-full bg-white dark:bg-slate-900/50 border border-slate-300 dark:border-white/10 rounded-xl px-4 py-3 text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-amber-500 transition-all duration-500"
                required
              />
            </div>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              className="w-full bg-gradient-to-r from-amber-500 to-yellow-500 text-slate-900 font-bold py-3 px-4 rounded-xl shadow-lg hover:shadow-amber-500/25 flex items-center justify-center gap-2 transition-all duration-500"
            >
              <span>Start Quiz</span>
              <ArrowRight className="w-5 h-5" />
            </motion.button>
          </form>
        </div>
      </motion.div>
    </div>
  );
};

export default Login;
