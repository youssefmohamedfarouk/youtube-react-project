import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./components/home/Home";
import "./App.css";
import Nav from "./components/common/Nav";
import Footer from "./components/common/Footer"
import Video from "./components/videos/Video"
import About from "./components/about/About"

export default function App() {

  return (
    <div className="wrapper">
      <Router>
        <Nav />
        <Routes>
          <Route element={<Home />} path="/" />
          <Route element={<About />} path="/about" />
          <Route element={<Video />} path="/videos/:id" />
        </Routes>
        <Footer/>
      </Router>
    </div>
  );
}
