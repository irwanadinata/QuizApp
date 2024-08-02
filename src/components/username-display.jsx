import React, { useState, useEffect } from "react";

const UsernameDisplay = ({say}) => {
  const [username, setUsername] = useState("");

  useEffect(() => {
    // Mengambil username dari local storage
    const storedUsername = localStorage.getItem("username");
    if (storedUsername) {
      setUsername(storedUsername);
    }
  }, []);

  return (
    <div className="text-end mb-4">
      {username ? <h2 className="text-l font-semibold">{say}, {username}!</h2> : <h2 className="text-xl">{say}, Guest!</h2>}
    </div>
  );
};

export default UsernameDisplay;
