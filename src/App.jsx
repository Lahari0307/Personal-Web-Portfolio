import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import './index.css';

export default function App() {
  return (
    <div className="app">

      {/* HERO SECTION */}
      <motion.div className="hero" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
        <img src="/profile.png" alt="Laharika" className="profile-pic"/>
        <div className="hero-text">
          <h1>Hi👋 I'm Laharika Kundla </h1>
          <p> Motivated and detail-oriented postgraduate in Computer Applications with strong foundation in
            Programming, Cloud Computing, and Web Development. Proven ability to quickly learn new technologies and contribute to collaborative team projects.
            Eager to apply academic knowledge and technical skills to solve real-world challenges in the IT industry.</p>
          <div className="hero-buttons">
            <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="resume-btn">Download Resume</a>
            <a href="https://github.com/Lahari0307" target="_blank" rel="noopener noreferrer" className="social-btn"><FaGithub /> GitHub</a>
            <a href="https://www.linkedin.com/in/kundla-laharika-344537202/" target="_blank" rel="noopener noreferrer" className="social-btn"><FaLinkedin /> LinkedIn</a>
          </div>
        </div>
      </motion.div>

      {/* SKILLS SECTION */}
      <section>
        <h2>🚀 Skills</h2>
        <div className="grid">
          <div>HTML</div>
          <div>CSS</div>
          <div>Cloud-Computing</div>
          <div>Networking</div>
          <div>Firebase</div>
          <div>Python</div>
          <div>Java</div>
          <div>AWS</div>
        </div>
      </section>

      {/* PROJECTS SECTION */}
<section>
  <h2>📂 Projects</h2>

  <div className="cards">

    <div 
      className="card"
      onClick={() => window.open("https://github.com/Lahari0307/Secret_Number_Game.git", "_blank")}
    >
      Secret Number Game
    </div>

    <div 
      className="card"
      onClick={() => window.open("https://github.com/Lahari0307/CryptoApp.git", "_blank")}
    >
      Crypto App
    </div>

    <div 
      className="card"
      onClick={() => window.open("https://github.com/Lahari0307/Expense-Tracker.git", "_blank")}
    >
      Cloud Expense Tracker
    </div>

    <div 
      className="card"
      onClick={() => window.open("https://your-connect4-link.com", "_blank")}
    >
      Multiplayer Connect4 Game
    </div>

<div 
      className="card"
      onClick={() => window.open("https://your-connect4-link.com", "_blank")}
    >
      My-Portfolio
    </div>
  </div>
</section>


      {/* CONTACT SECTION */}
      <section>
  <h2>📞 Contact</h2>
  <p>Email: laharikakundla@gmail.com</p>
  <p>
    GitHub: <a href="https://github.com/Lahari0307" target="_blank" rel="noopener noreferrer" className="github-link">github.com/Lahari0307</a>
  </p>
  <p>
    LinkedIn: <a href="https://linkedin.com/in/kundla-laharika-344537202" target="_blank" rel="noopener noreferrer" className="linkedin-link">linkedin.com/in/kundla-laharika-344537202</a>
  </p>
</section>

    </div>
  );
}
