import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Switch>
        <Route path="/abouts">
          <About />
        </Route>
        <Route path="/users">
          <Users />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
