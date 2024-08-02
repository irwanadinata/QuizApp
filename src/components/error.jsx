import React from "react";

const Error = ({ error }) => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-6 rounded shadow-md text-center">
        <h2 className="text-2xl font-semibold mb-4">Error</h2>
        <p className="mb-4">{error}</p>
        <button
          onClick={() => window.location.reload()}
          className="p-2 bg-gray-300 text-white rounded"
        >
          Retry
        </button>
      </div>
    </div>
  );
};

export default Error;
