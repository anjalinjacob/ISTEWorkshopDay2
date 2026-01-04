import React from "react";
import "./Home.css";

const Home = () => {
  return (
    <div className="home">
      <div className="home-content">
        <h1 className="home-title">Nexora</h1>
        <p className="home-subtitle">
          Powering the next generation of digital innovation
        </p>

        <div className="home-buttons">
          <button className="primary-btn">Get Started</button>
          <button className="secondary-btn">Learn More</button>
        </div>
      </div>
    </div>
  );
};

export default Home;
