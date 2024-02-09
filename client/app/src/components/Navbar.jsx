import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import burger from "../assets/burger.png";
import logo from "../assets/logo.png";
const Navbar = ({ username, isLogged, isAdmin, isMod, isNormal }) => {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);
  // const signOut = useSignOut();
  return (
    <nav className=" shadow-2xl fixed z-50 font-primary bg-transparent p-4 w-screen">
      <div className="container mx-auto flex justify-between items-center">
        <div
          onClick={() => navigate("/")}
          className="hover:cursor-pointer text-white font-bold text-xl flex items-center justify-center space-x-2"
        >
          <h1 className="font-display font-semibold font-primary tracking-widest">
            DATALENS
          </h1>
        </div>

        {/* Hamburger Button with Image */}
        <div
          className="menu-btn cursor-pointer block md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <img
            src={burger} // Replace with the correct path to your burger icon
            alt="Hamburger Icon"
            className="w-6 h-6 text-white"
          />
        </div>

        {/* Navbar Links */}
        <div
          className={`shadow-2xl menu ${
            menuOpen
              ? "bg-opacity-75 backdrop-blur-lg animate-on-load slide-down flex flex-col space-y-4 absolute right-0 top-16 bg-transparent w-full text-xl"
              : "hidden space-x-10"
          } md:flex items-center font-semibold`}
        >
          <Link
            to="/blog"
            className="uppercase text-white font-normal mx-2 text-xl hover:scale-125 transition duration-100"
          >
            Blog
          </Link>
          <Link
            to="/faq"
            className="uppercase text-white font-normal mx-2 text-xl hover:scale-125 transition duration-100"
          >
            FAQ
          </Link>
          <Link
            to="/"
            className="uppercase text-white font-normal mx-2 text-xl hover:scale-125 transition duration-100"
          >
            API
          </Link>
          <button
            onClick={() => navigate("/app")}
            className="font-display flex items-center bg-gradient-to-r from-green-400 to-blue-700 hover:shadow-xl hover:shadow-green-400 hover:scale-105 transition duration-300 ease-in-out text-white px-4 py-1 rounded-lg mx-2"
          >
            <h1 className="font-medium p-2">Launch App</h1>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
