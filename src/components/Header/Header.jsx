import "./Header.css";
import { Howl } from "howler";

import flower from "../../assets/images/flower.png";
import sun from "../../assets/images/sun.png";
import moon from "../../assets/images/moon.png";
import soundOn from "../../assets/images/soundOn.png";
import soundOff from "../../assets/images/soundOff.png";

import click from "../../assets/sounds/btn-minecraft.wav";

const clickSound = new Howl({ src: [click] });

function Header({ isDarkTheme, toggleTheme, isSoundOn, toggleSound }) {
  const playSound = () => {
    if (isSoundOn) clickSound.play();
  };

  const muteSound = () => {
    toggleSound();
    Howl.mute(!isSoundOn);
  };
  return (
    <header>
      <div>
        <img src={flower} alt="Logo" />
      </div>

      <div class="buttons">
        <button
          onClick={() => {
            toggleTheme();
            playSound();
          }}
        >
          <img src={isDarkTheme ? moon : sun} alt="Theme Icon" />
        </button>
        <button
          onClick={() => {
            toggleSound();
            muteSound();
          }}
        >
          <img src={isSoundOn ? soundOn : soundOff} alt="Sound Icon" />
        </button>
      </div>
    </header>
  );
}

export default Header;
