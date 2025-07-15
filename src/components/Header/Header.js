const template = document.createElement('template');
template.innerHTML = `
  <style>
    header {
      position: fixed;
      top: 0;
      height: 10%;
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 1rem;
      background: rgba(255, 255, 255, 0.8);
      backdrop-filter: blur(10px);
      z-index: 50;
      border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    }
  </style>
  <header>
    <img id="logo" class="w-10 h-10">
    <div class="flex gap-2">
      <button id="theme-toggle">
        <img id="theme-icon" class="w-5 h-5">
      </button>
      <button id="audio-toggle">
        <img id="audio-icon" class="w-5 h-5">
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
    
    this.logo.src = new URL('../../assets/images/logo.png', import.meta.url).href;
    this.themeIcon.src = new URL('../../assets/images/light-mode.svg', import.meta.url).href;
    this.audioIcon.src = new URL('../../assets/images/volume-off.svg', import.meta.url).href;
    
    this.shadowRoot.getElementById('theme-toggle').addEventListener('click', this.toggleTheme);
    this.shadowRoot.getElementById('audio-toggle').addEventListener('click', this.toggleAudio);
  }

  toggleTheme = () => {
    document.documentElement.classList.toggle('dark');
    const isDark = document.documentElement.classList.contains('dark');
    this.themeIcon.src = new URL(
      `../../assets/images/${isDark ? 'dark-mode' : 'light-mode'}.svg`, 
      import.meta.url
    ).href;
  };

  toggleAudio = () => {
    document.documentElement.classList.toggle('muted');
    const isMuted = this.audioIcon.src.includes('volume-off.svg');
    this.audioIcon.src = new URL(
      `../../assets/images/volume-${isMuted ? 'volume-on' : 'volume-off'}.svg`, 
      import.meta.url
    ).href;
  };
}

customElements.define('portfolio-header', Header);

export default Header;