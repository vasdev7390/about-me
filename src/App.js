import React from "react";
import "./App.css";

function App() {
  return (
    <div className="app">
      <header className="header">
        <img src="./assets/logo.png" alt="Me" className="profile-pic" />
        <h1>Hi, I'm Vas 👋</h1>
        <p className="tagline">React & Angular Developer | Tech Explorer</p>
      </header>

      <section className="about">
        <h2>About Me</h2>
        <p>
          Passionate developer with experience in building web applications.
          I enjoy exploring new technologies and creating meaningful solutions.
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
