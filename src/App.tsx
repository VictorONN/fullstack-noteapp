import { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import About from "./components/About";
import LoginPage from "./components/auth/login";
import Home from "./components/Home";

function App() {

  return (
    <div className="App">
      <Routes>
        <Route path="/login"  element={<LoginPage />}/>
        <Route path="/about"  element={<About />}/>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
