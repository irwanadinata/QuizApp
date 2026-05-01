import React, { useState, useEffect } from "react";
import { User } from "lucide-react";

const UsernameDisplay = ({ say }) => {
  const [username, setUsername] = useState("");

  useEffect(() => {
    const storedUsername = localStorage.getItem("username");
    if (storedUsername) {
      setUsername(storedUsername);
    }
  }, []);

  return (
    <div className="flex items-center gap-2 text-slate-700 dark:text-slate-300 bg-white/60 dark:bg-white/5 w-fit px-4 py-2 rounded-full border border-slate-200 dark:border-white/10 shadow-sm dark:shadow-none transition-colors duration-500">
      <User className="w-4 h-4 text-amber-500 dark:text-amber-400" />
      <span className="font-medium text-sm">
        {say}, {username || "Guest"}!
      </span>
    </div>
  );
};

export default UsernameDisplay;
