import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Home from "./pages/Home";
import Notes from "./pages/Notes";
import MindDeck from "./pages/StudySpace";
import NavBar from "./components/NavBar/NavBar";
import "./App.css";

const App = () => {
  return (
    <div>
      <Router>
        <div id="nav" className="bar">
          <div id="brand">Focusite</div>
          <div id="links">
            <Link to="/" className="nav-item">
              Home
            </Link>
            <Link to="/notes" className="nav-item">
              Notes
            </Link>
            <Link to="/minddeck" className="nav-item">
              Mind Deck
            </Link>
          </div>
        </div>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/notes" element={<Notes />} />
          <Route path="/minddeck" element={<MindDeck />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;