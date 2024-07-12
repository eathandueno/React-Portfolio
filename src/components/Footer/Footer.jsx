import React from "react";
import "./footer.css"; // Make sure to create a corresponding CSS file for styling
import Linkedin from "./images/linkedinLogo.png"; // Import the logo image directly
import Github from "./images/githubLogo.png"; // Import the logo image directly
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>
          Contact me at
          <a href="mailto:elduenofn@gmail.com" className="email-link">
            elduenofn@gmail.com
          </a>
        </p>
        <ul className="social-links">
          <li>
            <a
              href="https://linkedin.com/in/eathandueno"
              target="_blank"
              rel="noopener noreferrer">
              <img src={Linkedin} alt="LinkedIn" />
            </a>
          </li>
          <li>
            <a
              href="https://github.com/eathandueno"
              target="_blank"
              rel="noopener noreferrer">
              <img src={Github} alt="Github" />
            </a>
          </li>
        </ul>
      </div>
      <div className="copy-right">
        <p>© 2024 Eathan Dueno. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
