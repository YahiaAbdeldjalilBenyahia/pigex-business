import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import axios from "axios";
import search from "./assets/search.png";
import Navbar from "./components/Navbar";

import { Route, Routes } from "react-router-dom";
import Contact from "./components/Contact";
import Analyzer from "./components/Analyzer";
import Loading from "./components/Loading";
import Home from "./components/Home";
import FAQ from "./components/FAQ";
import Blog from "./components/Blog";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route exact path="/blog" element={<Blog />}></Route>
        <Route exact path="/faq" element={<FAQ />}></Route>
        {/* <Route exact path="/login" element={<Login />}></Route> */}
        <Route exact path="/contact" element={<Contact />}></Route>
        <Route exact path="/loading" element={<Loading />}></Route>
        <Route exact path="/app" element={<Analyzer />}></Route>
      </Routes>
    </>
  );
}

export default App;
