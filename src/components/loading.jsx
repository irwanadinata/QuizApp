import React from "react";
import { SyncLoader } from "react-spinners";

const Loading = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-slate-50 dark:bg-slate-950 relative overflow-hidden transition-colors duration-500">
      <div className="absolute top-[-10%] left-[-10%] w-96 h-96 bg-amber-600 rounded-full mix-blend-multiply filter blur-3xl opacity-0 dark:opacity-10 animate-blob transition-opacity duration-500"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-96 h-96 bg-yellow-600 rounded-full mix-blend-multiply filter blur-3xl opacity-0 dark:opacity-10 animate-blob animation-delay-2000 transition-opacity duration-500"></div>
      <div className="relative z-10 flex flex-col items-center gap-6">
        <div className="bg-white/60 dark:bg-white/10 p-8 rounded-full border border-slate-200 dark:border-white/10 backdrop-blur-xl shadow-xl transition-colors duration-500">
          <SyncLoader color="#f59e0b" size={15} margin={5} />
        </div>
        <p className="text-slate-500 dark:text-slate-400 font-medium tracking-widest uppercase text-sm animate-pulse transition-colors duration-500">
          Loading Questions
        </p>
      </div>
    </div>
  );
};

export default Loading;
