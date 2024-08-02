import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [username, setUsername] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    localStorage.setItem("username", username);
    navigate("/quiz");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form onSubmit={handleLogin} className="bg-white p-8 rounded shadow-md">
        <h1 className="text-xl mb-10 text-center font-bold">Quiz App</h1>
        <label className="block text-lg font-semibold mb-2">
          Username:
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="mt-2 p-2 border border-gray-300 rounded w-full"
            required
          />
        </label>
        <div className="flex justify-center">
          <button
            type="submit"
            className="mt-4 p-2 w-1/2 bg-gray-300 text-black rounded"
          >
            Login
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
