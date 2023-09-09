import { Container, Row, Col } from "react-bootstrap";
import profilePic from "../../assets/img/Joseph-Rudasill.jpg";

export const Resume = () => {
  return (
    <section className="resume" id="resume">
      <div class="resume-welcome-box">
        <h1 className="resume-welcome">
          Hello There! <p>I'm Joseph Rudasill</p>
        </h1>
        <img class="resumePic" src={profilePic} alt="profile picture" />
        <div>
          <a
            className="resume-welcome"
            href="/Donna_Thompson_Resume.pdf"
            target="_blank"
            rel="noreferrer"
          >
            Click Here to View my Resume
          </a>
        </div>
      </div>
      <div className="skills">
        <h2 className="resume-welcome">Skills</h2>
        <div className="skillsGrid">
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original-wordmark.svg"
            alt="The logo icon for HTML 5"
            title="HTML 5"
          />
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg"
            alt="The logo icon for react"
            title="React"
          />
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original-wordmark.svg"
            alt="The logo icon for CSS3"
            title="CSS 3"
          />
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original-wordmark.svg"
            alt="The logo icon for Python"
            title="Python"
          />
          <img
            src="https://cdn.icon-icons.com/icons2/2107/PNG/512/file_type_tailwind_icon_130128.png"
            alt="The logo icon for TailwindCSS"
            title="Twilwind CSS"
          />
          <img
            src="https://cdn.freebiesupply.com/logos/thumbs/2x/javascript-logo.png"
            alt="The logo icon for JavaScript"
            title="Javascript"
          />
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg"
            alt="The logo icon for NPM"
            title="NPM"
          />

          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original-wordmark.svg"
            alt="The logo icon for GitHub"
            title="GitHub"
          />

          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original-wordmark.svg"
            alt="The logo icon for NodeJS"
            title="Node JS"
          />
        </div>
      </div>
    </section>
  );
};
