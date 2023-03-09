import { useState } from "react";

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import About from "./components/About";
import SignUpPage from "./components/auth/Signup";
import LoginPage from "./components/auth/login";
import Home from "./components/Home";
import Dashboard from "./components/dashboard/dashboard";

// import { AuthProvider } from "./Auth";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<SignUpPage />} />

        <Route path="/dashboard" element={<Dashboard />} />

        
        <Route path="/about" element={<About />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
