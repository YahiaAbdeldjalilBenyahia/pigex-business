import React from "react";
import backgroundImage from "../assets/backgrounds/8.jpg";
import { useNavigate } from "react-router-dom";
const FAQ = () => {
  const navigate = useNavigate();
  return (
    <div
      className={`bg-opacity-50 backdrop-blur-md h-full slide-down relative font-display w-screen bg-cover bg-center`}
    >
      <section className="bg-zinc-950 w-full h-full bg-opacity-60 dark:bg-gray-900 pt-10">
        <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16">
          <h1 className="mb-4 text-lg font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl dark:text-white">
            What is PiGEX, and how does it work?
          </h1>
          <p className="mb-8 text-lg font-normal text-gray-200 lg:text-xl sm:px-16 lg:px-48 dark:text-gray-400">
            PiGEX is a tool designed to analyze and explore datasets, extracting
            insights, patterns, and trends to generate ideas and questions. It
            leverages various algorithms, statistical techniques, and
            visualization methods to uncover meaningful information within the
            data.
          </p>
          <h1 className="mb-4 text-lg font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl dark:text-white">
            What types of datasets can be analyzed using this software?
          </h1>
          <p className="mb-8 text-lg font-normal text-gray-200 lg:text-xl sm:px-16 lg:px-48 dark:text-gray-400">
            PiGEX can handle a wide range of datasets, including structured,
            semi-structured, and unstructured data. It is versatile enough to
            analyze numerical data, text data, time-series data, and more,
            making it suitable for diverse applications across industries.
          </p>
          <h1 className="mb-4 text-lg font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl dark:text-white">
            What are the key features of dataset analysis software?
          </h1>
          <p className="mb-8 text-lg font-normal text-gray-200 lg:text-xl sm:px-16 lg:px-48 dark:text-gray-400">
            Key features of dataset analysis software include statistical
            analysis capabilities, pattern recognition algorithms, anomaly
            detection techniques, and natural language processing (NLP)
            functionalities. These features enable users to explore datasets,
            identify insights, and formulate questions for further
            investigation.
          </p>
          {/* <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0">
            <button
              onClick={() => navigate("/app")}
              className="font-display flex items-center bg-gradient-to-r from-green-400 to-blue-700 hover:shadow-xl hover:shadow-green-400 hover:scale-105 transition duration-500 ease-in-out text-white px-4 py-1 rounded-lg mx-2 sm:w-auto"
            >
              <h1 className="font-regular p-2 slide-right slide-right">
                Launch App{" "}
              </h1>
            </button>
            <button
              onClick={() => navigate("/app")}
              className="font-display flex items-center bg-gradient-to-r bg-white text-black hover:shadow-xl hover:shadow-green-400 hover:scale-105 transition duration-500 ease-in-out px-4 py-1 rounded-lg mx-2 sm:w-auto"
            >
              <h1 className="font-regular p-2">Learn More</h1>
            </button>
          </div> */}
        </div>
      </section>
    </div>
  );
};

export default FAQ;
