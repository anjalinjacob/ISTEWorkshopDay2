import React from "react";
import { FaLightbulb, FaShieldAlt, FaRocket, FaUsers } from "react-icons/fa";
import "./About.css";

const About = () => {
  return (
    <section className="about">
      <div className="about-header">
        <h2>Why Nexora?</h2>
        <p>
          Nexora is built to shape the future of digital experiences by combining
          innovation, trust, and performance.
        </p>
      </div>

      <div className="about-grid">
        <div className="about-card">
          <FaLightbulb className="about-icon" />
          <h3>Smart Innovation</h3>
          <p>
            We leverage modern technologies to design intelligent solutions that
            adapt to evolving user needs.
          </p>
        </div>

        <div className="about-card">
          <FaShieldAlt className="about-icon" />
          <h3>Secure & Reliable</h3>
          <p>
            Nexora prioritizes security and reliability, ensuring stable and
            protected digital systems.
          </p>
        </div>

        <div className="about-card">
          <FaRocket className="about-icon" />
          <h3>High Performance</h3>
          <p>
            Optimized for speed and scalability, Nexora delivers smooth
            performance at every scale.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
