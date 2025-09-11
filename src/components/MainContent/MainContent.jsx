import "./Main.css";
import { useState } from "react";
import About from "./About/About";
import Career from "./Career/Career";
import Home from "./Home/Home";
import Projects from "./Projects/Projects";
import Links from "./Links/Links";

import about from "/assets/images/about.png";
import career from "/assets/images/work.png";
import home from "/assets/images/home.png";
import projects from "/assets/images/education.png";
import links from "/assets/images/links.png";

const buttonData = [
  { id: "About", src: about, label: "sobre" },
  { id: "Career", src: career, label: "trabalho" },
  { id: "Home", src: home, label: "home" },
  { id: "Projects", src: projects, label: "projetos" },
  { id: "Links", src: links, label: "links" },
];

function MainContent({ isDarkTheme }) {
  const [activeSection, setActiveSection] = useState("Home");

  const renderSection = () => {
    switch (activeSection) {
      case "About":
        return <About />;
      case "Career":
        return <Career />;
      case "Projects":
        return <Projects />;
      case "Links":
        return <Links />;
      default:
        return <Home />;
    }
  };

  return (
    <main>
      <div
        class="canvas"
        className={`canvas ${isDarkTheme ? "dark-theme" : "light-theme"}`}
      >
        {renderSection()}

        <div className="button-row" id="buttonRow">
          {buttonData.map(({ id, src, label }) => (
            <button
              key={id}
              className="custom-button"
              onClick={() => setActiveSection(id)}
              data-label={label}
            >
              <img src={src} alt={id.toLowerCase()} />
            </button>
          ))}
        </div>
      </div>
    </main>
  );
}

export default MainContent;
