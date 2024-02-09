import React from "react";

const Loading = () => {
  return (
    <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-gray-800 bg-opacity-50 backdrop-blur-sm">
      {/* Loading spinner */}
      <ul className="space-y-4 flex flex-col items-center justify-center w-full">
        <h1 className="xxs:text-lg animate-pulse text-white">
          {"~/> "}Analyzing (this might take a long time...)
        </h1>
        <button
          onClick={() => window.location.reload()}
          className="font-display flex items-center text-black hover:shadow-xl hover:shadow-white-400 hover:scale-105 transition duration-500 ease-in-out px-4 py-1 rounded-lg mx-2 bg-white"
        >
          <h1 className="font-regular ">cancel {">"}</h1>
        </button>
      </ul>
    </div>
  );
};

export default Loading;
