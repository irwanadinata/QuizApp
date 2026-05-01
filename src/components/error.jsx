import React from "react";
import { AlertOctagon, RefreshCw } from "lucide-react";
import { motion } from "framer-motion";
import ThemeToggle from "./theme-toggle";

const Error = ({ error }) => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50 dark:bg-slate-950 p-4 relative overflow-hidden transition-colors duration-500">
      <div className="absolute top-[-10%] left-[-10%] w-96 h-96 bg-red-600 rounded-full mix-blend-multiply filter blur-3xl opacity-0 dark:opacity-10 animate-blob transition-opacity duration-500"></div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white/60 dark:bg-white/10 backdrop-blur-xl border border-red-200 dark:border-red-500/20 p-8 rounded-3xl shadow-xl text-center max-w-md w-full relative z-10 transition-colors duration-500"
      >
        <div className="flex justify-end mb-4">
          <ThemeToggle />
        </div>
        <div className="inline-block p-4 rounded-full bg-red-100 dark:bg-red-500/20 mb-6 border border-red-200 dark:border-red-500/30 transition-colors duration-500">
          <AlertOctagon className="w-12 h-12 text-red-500 dark:text-red-400" />
        </div>

        <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-3 transition-colors duration-500">
          Oops! Something went wrong
        </h2>
        <p className="text-slate-600 dark:text-slate-400 mb-8 transition-colors duration-500">
          {error}
        </p>

        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={() => window.location.reload()}
          className="w-full bg-red-100 dark:bg-red-500/10 hover:bg-red-200 dark:hover:bg-red-500/20 text-red-600 dark:text-red-400 border border-red-300 dark:border-red-500/50 font-semibold py-3 px-6 rounded-xl flex items-center justify-center gap-2 transition-all duration-500"
        >
          <RefreshCw className="w-5 h-5" />
          <span>Try Again</span>
        </motion.button>
      </motion.div>
    </div>
  );
};

export default Error;
