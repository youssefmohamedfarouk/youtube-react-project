import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./components/home/Home";
import "./App.css";
import Nav from "./components/common/Nav";
import Video from "./components/videos/Video"

export default function App() {

  return (
    <div className="wrapper">
      <Router>
        <Nav />
        <Routes>
          <Route element={<Home />} path="/" />
          <Route element={<Video />} path="/videos/:id" />
        </Routes>
      </Router>
    </div>
  );
}
