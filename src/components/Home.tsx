import React from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();
  return <React.Fragment>
    <h1>Home page placeholder</h1>
    <h5>One</h5>
    <Link to="/about"></Link>
    <h5>Two</h5>
    <button onClick={() => {
      navigate("/about");
    }}>About us</button>
  </React.Fragment>;
}
