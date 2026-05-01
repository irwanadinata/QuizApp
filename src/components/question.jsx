import React, { useMemo } from "react";
import { motion } from "framer-motion";

const Question = ({ question, handleAnswer }) => {
  const { question: text, correct_answer, incorrect_answers } = question;

  const options = useMemo(() => {
    return [correct_answer, ...incorrect_answers].sort(
      () => Math.random() - 0.5,
    );
  }, [question]);

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      className="w-full"
    >
      <h2
        className="text-xl font-semibold mb-6 text-slate-800 dark:text-white leading-relaxed transition-colors duration-500"
        dangerouslySetInnerHTML={{ __html: text }}
      />
      <div className="space-y-3">
        {options.map((option, index) => (
          <motion.button
            key={index}
            whileHover={{
              scale: 1.02,
              backgroundColor: "rgba(245, 158, 11, 0.15)",
            }}
            whileTap={{ scale: 0.98 }}
            onClick={() => handleAnswer(option === correct_answer)}
            className="w-full text-left p-4 rounded-xl border border-slate-200 dark:border-white/10 bg-white dark:bg-slate-900/40 text-slate-700 dark:text-slate-200 hover:border-amber-500/50 dark:hover:border-amber-500/50 transition-colors duration-500 shadow-sm dark:shadow-none"
            dangerouslySetInnerHTML={{ __html: option }}
          />
        ))}
      </div>
    </motion.div>
  );
};

export default Question;
