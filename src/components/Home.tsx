import React from "react";
import app from "../base";

const Home = () => {
  return (
    <div>
      <h1>Home page placeholder</h1>
      <button onClick={() => app.auth().signOut()}>Sign Out</button>
    </div>
  );
};

export default Home;
