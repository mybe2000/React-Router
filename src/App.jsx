import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import Blue from "./components/Blue/Blue";
import Red from "./components/Red/Red";

import "./App.css";

function App() {
  return (
    <>
      <div id="container">
        <Navbar />
        <div id="main-section">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/blue" element={<Blue />} />
            <Route path="/red" element={<Red />} />
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;
