import { useState } from "react";
import { FaGithub, FaLinkedin, FaMoon, FaSun } from "react-icons/fa";
import "./index.css";

export default function App() {
  const [darkMode, setDarkMode] = useState(true);

  // ✅ FIXED: toggle function added
  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={darkMode ? "app dark" : "app light"}>

      {/* ✅ NAVBAR */}
      <nav className="navbar">
        <div className="logo">Implementing Idea's to Code</div>

        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>

        {/* ✅ FIXED TOGGLE */}
       <button
  className="theme-toggle"
  onClick={() => setDarkMode(!darkMode)}
>
  {darkMode ? "☀️" : "🌙"}
</button>

      </nav>

     {/* ✅ HERO SECTION */}
{/* ✅ HERO SECTION */}
<section className="hero">
  <div className="hero-content">
    <h1>Hi, I'm <span>Laharika</span></h1>
    <h2> MCA Student</h2>
    <p>
      Motivated and detail-oriented postgraduate in Computer Applications
      with strong foundation in programming, cloud computing, and web development. 
    </p>

    <div className="hero-buttons">
<a href="#contact" className="hire-btn">Hire Me</a>
    </div>
  </div>

  <div className="hero-image">
    <img src="/profile.png" alt="profile" />
  </div>
</section>



      {/* ✅ ABOUT */}
     <section id="about" className="education">
  <h2 className="edu-title">🎓 Education</h2>

  <div className="timeline">

    <div className="timeline-item">
      <span className="dot"></span>
      <div>
        <h4>MCA - Master of Computer Applications</h4>
        <p>Specialization - Cloud Technology & Information Security</p>
        <p>KL University, Vijayawada</p>
        <p>2024 - 2026</p>
      </div>
    </div>

    <div className="timeline-item">
      <span className="dot"></span>
      <div>
        <h4>BCA - Bachelor's of Computer Applications</h4>
        <p>Specialization - Cloud Computing</p>
        <p>KL University, Vijayawada</p>
        <p>2020 - 2023</p>
      </div>
    </div>

  </div>
</section>

{/* ✅ SKILLS */}
<section id="skills" className="skills-section">
  <h2>⚡ My Skills</h2>

  <div className="cards">

    <div className="card skill-card">
      <img src="/icons/html.png" className="skill-icon" />
      HTML
    </div>

    <div className="card skill-card">
      <img src="/icons/css.png" className="skill-icon" />
      CSS
    </div>

    <div className="card skill-card">
      <img src="/icons/CC.png" className="skill-icon" />
      Cloud-computing
    </div>

    <div className="card skill-card">
      <img src="/icons/firebase.png" className="skill-icon" />
      Firebase
    </div>

    <div className="card skill-card">
      <img src="/icons/mysql.png" className="skill-icon" />
      MySQL
    </div>

    <div className="card skill-card">
      <img src="/icons/docker.png" className="skill-icon" />
      Docker
    </div>

    <div className="card skill-card">
      <img src="/icons/aws.png" className="skill-icon" />
      AWS
    </div>

  </div>
</section>



      {/* ✅ PROJECTS */}
<section id="projects">
  <h2>📂 Projects</h2>

  <div className="cards">

    <div className="project-card">
      <h3>Secret Number Game</h3>
      <button onClick={() => window.open("https://secret-number-game-nu-dusky.vercel.app/")}>
        View Project
      </button>
    </div>

    <div className="project-card">
      <h3>Crypto App</h3>
      <button onClick={() => window.open("https://github.com/Lahari0307/CryptoApp.git")}>
        View Project
      </button>
    </div>

    <div className="project-card">
      <h3>Cloud Expense Tracker</h3>
      <button onClick={() => window.open("https://github.com/Lahari0307/Expense-Tracker.git")}>
        View Project
      </button>
    </div>

    <div className="project-card">
      <h3>Multiplayer Connect4</h3>
      <button onClick={() => window.open("https://github.com/Lahari0307/Multiplayer-Connect4-Game.git")}>
        View Project
      </button>
    </div>

    <div className="project-card">
      <h3>Portfolio</h3>
      <button onClick={() => window.open("https://personal-web-portfolio-nine.vercel.app/")}>
        View Project
      </button>
    </div>

  </div>
</section>


      {/* ✅ CONTACT FORM */}
<section id="contact" className="contact">
  <h2>📞 Contact Me</h2>

  <form className="contact-form">
    <input type="text" placeholder="Your Name" required />
    <input type="email" placeholder="Your Email" required />
    <textarea rows="4" placeholder="Your Message" required></textarea>
    <button type="submit">Send Message</button>
  </form>
</section>


      {/* ✅ FOOTER */}
      <footer className="footer">
        © 2025 Laharika Kundla | All Rights Reserved
      </footer>

    </div>
  );
}
