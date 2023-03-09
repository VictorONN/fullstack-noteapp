import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import About from "./components/About";
import LoginPage from "./components/auth/login";
import Home from "./components/Home";
import Users from "./components/Users";

function App() {
  const [count, setCount] = useState(0);

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
