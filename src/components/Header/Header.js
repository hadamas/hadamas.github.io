import { Howl } from 'howler';

const template = document.createElement('template');
template.innerHTML = `
  <style>
    header {
      position: fixed;
      top: 0;
      height: auto;
      width: 100%;
      box-sizing: border-box;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 1rem 3rem 0.5rem 3rem;
      backdrop-filter: blur(10px);
      z-index: 50;
      border-bottom: 1px black solid;
    }
    #logo {
      height: 5rem;
      width: 5rem;
    }
    .buttons {
      display: flex;
      gap: 1rem;
    }
    button#theme-toggle, button#audio-toggle {
      background: none;
      border: none;
      padding: 0;
      margin: 0;
      outline: none;
      appearance: none;
      -webkit-appearance: none;
      -moz-appearance: none;
      height: 5rem;
      width: 5rem;
    }
    button#theme-toggle:hover, button#audio-toggle:hover {
      cursor: pointer;
    }
  </style>

  <header>
    <img id="logo">
    <div class="buttons">
      <button id="theme-toggle">
        <img id="theme-icon">
      </button>
      <button id="audio-toggle">
        <img id="audio-icon">
      </button>
    </div>
  </header>
`;

class Header extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.appendChild(template.content.cloneNode(true));
    
    this.logo = this.shadowRoot.getElementById('logo');
    this.themeIcon = this.shadowRoot.getElementById('theme-icon');
    this.audioIcon = this.shadowRoot.getElementById('audio-icon');

    this.isMuted = false;
    this.isDark = false;

    this.themeSound = new Howl({
      src: [new URL('../../assets/sounds/minecraft-btn.wav', import.meta.url).href],
      volume: 0.5,
      preload: true
    });


    
    this.logo.src = new URL('../../assets/images/logo-light.png', import.meta.url).href;
    this.themeIcon.src = new URL('../../assets/images/light-mode.svg', import.meta.url).href;
    this.audioIcon.src = new URL('../../assets/images/volume-on-dark.svg', import.meta.url).href;
    
    this.shadowRoot.getElementById('theme-toggle').addEventListener('click', this.toggleTheme);
    this.shadowRoot.getElementById('audio-toggle').addEventListener('click', this.toggleAudio);
  }

  toggleTheme = () => {
    this.isDark = !this.isDark;
    document.documentElement.classList.toggle('dark');
    this.themeIcon.src = new URL(
      `../../assets/images/${this.isDark ? 'dark-mode' : 'light-mode'}.svg`,
      import.meta.url
    ).href;
    this.audioIcon.src = new URL(
      `../../assets/images/volume-${this.isMuted ? 'off' : 'on'}-${this.isDark ? 'light' : 'dark'}.svg`,
      import.meta.url
    ).href;
    this.logo.src = new URL(
      `../../assets/images/logo-${this.isDark ? 'dark' : 'light'}.svg`,
      import.meta.url
    ).href;
    if (!this.isMuted) {
      this.themeSound.play();
    }
  };

  toggleAudio = () => {
    this.isMuted = !this.isMuted;
    this.audioIcon.src = new URL(
      `../../assets/images/volume-${this.isMuted ? 'off' : 'on'}-${this.isDark ? 'light' : 'dark'}.svg`,
      import.meta.url
    ).href;
    this.themeSound.mute(this.isMuted);
  };
}

customElements.define('portfolio-header', Header);

export default Header;