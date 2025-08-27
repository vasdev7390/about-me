import React from "react";
import "./App.css";
import VASLogo from "./assets/logo.png";

function App() {
  return (
    <div className="app">
      <header className="header">
        <img src={VASLogo} alt="Me" className="profile-pic" />
        <h1>Hi, I'm Vas 👋</h1>
        <p className="tagline">React & Angular Developer | Tech Explorer</p>
      </header>

      <section className="about">
        <h2>About Me</h2>
        <p>
          I transform ideas into interactive, user-friendly applications. I focus on clean code, intuitive interfaces, and performance — and I love experimenting with AI-powered tools and modern web patterns to make development smarter.
        </p>
      </section>

      <section className="skills">
        <h2>Skills</h2>
        <ul>
          <li>⚛️ React</li>
          <li>🅰️ Angular</li>
          <li>💻 JavaScript</li>
          <li>🎨 CSS</li>
        </ul>
      </section>

      <section className="contact">
        <h2>Contact</h2>
        <p>📧 vas@example.com</p>
        <p>🌐 <a href="https://github.com/vasdev7390">GitHub</a></p>
        <p>💼 <a href="https://linkedin.com/in/your-profile">LinkedIn</a></p>
      </section>
    </div>
  );
}

export default App;
