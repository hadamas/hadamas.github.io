import "./Main.css";
import { useState } from 'react';
import About from './About';
import Work from './Work';
import Home from './Home';
import Education from './Education';
import Links from './Links';

import about from '../../assets/images/about.png';
import work from '../../assets/images/work.png';
import home from '../../assets/images/home.png';
import education from '../../assets/images/education.png';
import links from '../../assets/images/links.png';

const buttonData = [
  { id: 'About', src: about, label: 'Like' },
  { id: 'Work', src: work, label: 'Cheer' },
  { id: 'Home', src: home, label: 'Celebrate' },
  { id: 'Education', src: education, label: 'Appreciate' },
  { id: 'Links', src: links, label: 'Smile' },
];

function MainContent() {
  const [activeSection, setActiveSection] = useState('Home');

  const renderSection = () => {
    switch (activeSection) {
      case 'About': return <About />;
      case 'Work': return <Work />;
      case 'Education': return <Education />;
      case 'Links': return <Links />;
      default: return <Home />;
    }
  };

  return (
    <main>
      {renderSection()}
      
      <div className="button-row">
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

    </main>
  );
}

export default MainContent;