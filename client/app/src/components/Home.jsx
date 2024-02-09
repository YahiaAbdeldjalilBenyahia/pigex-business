import React from "react";
import backgroundImage from "../assets/backgrounds/8.jpg";
import { useNavigate } from "react-router-dom";
const Home = () => {
  const navigate = useNavigate();
  return (
    <div
      className={`slide-down relative font-display w-screen h-screen bg-cover bg-center`}
    >
      <section className="bg-zinc-950 w-full h-full bg-opacity-60 dark:bg-gray-900 pt-28">
        <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16">
          <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl dark:text-white">
            Data Analysis Made Easy
          </h1>
          <p className="mb-8 text-lg font-normal text-gray-200 lg:text-xl sm:px-16 lg:px-48 dark:text-gray-400">
            Unlock insights, make informed decisions, and drive growth with our
            powerful data analysis tools.{" "}
          </p>
          <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0">
            <button
              onClick={() => navigate("/app")}
              className="font-display flex items-center text-center bg-gradient-to-r from-green-400 to-blue-700 hover:shadow-xl hover:shadow-green-400 hover:scale-105 transition duration-500 ease-in-out text-white px-4 py-1 rounded-lg mx-2 sm:w-auto"
            >
              <h1 className="font-regular p-2 slide-right slide-right text-center">
                Launch App{" "}
              </h1>
            </button>
            <button
              onClick={() => navigate("/app")}
              className="font-display flex items-center bg-gradient-to-r bg-white text-black hover:shadow-xl hover:shadow-white hover:scale-105 transition duration-500 ease-in-out px-4 py-1 rounded-lg mx-2 sm:w-auto"
            >
              <h1 className="font-regular p-2">Learn More</h1>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
