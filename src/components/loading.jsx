import React from "react";
import { SyncLoader } from "react-spinners";

const Loading = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <SyncLoader color="#000000" size={10} />
    </div>
  );
};

export default Loading;
