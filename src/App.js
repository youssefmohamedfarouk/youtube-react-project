import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";

import Home from "./components/home/Home";
import "./App.css";
import Nav from "./components/common/Nav";
import Footer from "./components/common/Footer"
import SearchBar from "./components/common/SearchBar"
import Video from "./components/videos/Video"
import About from "./components/about/About"
import SearchResults from "./components/videos/SearchResults";

export default function App() {

  const [vidsArray, setVidsArray] = useState([]);

  return (
    <div className="wrapper">
      <Router>
        <Nav />
        <SearchBar setVidsArray={setVidsArray}/>
        <Routes>
          <Route element={<Home vidsArray={vidsArray} setVidsArray={setVidsArray}/>} path="/" />
          <Route element={<About />} path="/about" />
          <Route element={<Video />} path="/videos/:id" />
          <Route element={<SearchResults vidsArray={vidsArray} setVidsArray={setVidsArray}/>} path="/videos/:searchTerm" />
        </Routes>
        <Footer/>
      </Router>
    </div>
  );
}
