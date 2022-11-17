import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import './App.css';

export default function App() {
  return (
    <div className="wrapper">
      <Router>
        {/* <Nav /> */}
        <Routes>
          {/* <Route path="/" element={<Home />} /> */}
          {/* <Route path="/videos/:id" element={<ShowsIndex />} /> */}
        </Routes>
        {/* <Footer /> */}
      </Router>
    </div>
  );
}

