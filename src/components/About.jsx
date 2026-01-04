import React from "react";
import {
  FaLightbulb,
  FaShieldAlt,
  FaRocket,
  FaUsers,
  FaCogs,
  FaChartLine,
  FaCloud,
  FaMobileAlt
} from "react-icons/fa";
import "./About.css";

const About = () => {
  return (
    <section className="about">
      {/* Header */}
      <div className="about-header">
        <h2>About Nexora</h2>
        <p>
          Nexora is a next-generation digital platform designed to deliver
          innovation, security, and scalable solutions for the modern world.
        </p>
      </div>

      {/* Mission */}
      <div className="about-mission">
        <h3>Our Mission</h3>
        <p>
          To empower businesses and individuals with intelligent, reliable, and
          future-ready digital solutions that drive growth and innovation.
        </p>
      </div>

      {/* Features Grid */}
      <div className="about-grid">
        <div className="about-card">
          <FaLightbulb className="about-icon" />
          <h4>Smart Innovation</h4>
          <p>Creative solutions built using modern technologies.</p>
        </div>

        <div className="about-card">
          <FaShieldAlt className="about-icon" />
          <h4>Security First</h4>
          <p>Strong protection and reliable system architecture.</p>
        </div>

        <div className="about-card">
          <FaRocket className="about-icon" />
          <h4>High Performance</h4>
          <p>Fast, optimized, and scalable digital experiences.</p>
        </div>

        <div className="about-card">
          <FaUsers className="about-icon" />
          <h4>User-Focused Design</h4>
          <p>Intuitive interfaces built for real user needs.</p>
        </div>

        <div className="about-card">
          <FaCogs className="about-icon" />
          <h4>Customizable</h4>
          <p>Flexible solutions tailored to your requirements.</p>
        </div>

        <div className="about-card">
          <FaChartLine className="about-icon" />
          <h4>Data-Driven</h4>
          <p>Insights and analytics to support better decisions.</p>
        </div>

        <div className="about-card">
          <FaCloud className="about-icon" />
          <h4>Cloud Ready</h4>
          <p>Optimized for cloud-based infrastructure.</p>
        </div>

        <div className="about-card">
          <FaMobileAlt className="about-icon" />
          <h4>Responsive</h4>
          <p>Seamless experience across all devices.</p>
        </div>
      </div>
    </section>
  );
};

export default About;
