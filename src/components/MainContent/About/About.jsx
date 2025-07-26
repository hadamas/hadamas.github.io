import "./About.css";

function About() {
  const emoji = {
    br: "../../src/assets/images/BR.png",
    usa: "../../src/assets/images/USA.png",
    fr: "../../src/assets/images/FR.png",
    jp: "../../src/assets/images/JP.png",
    pin: "../../src/assets/images/pin.png",
    study: "../../src/assets/images/education.png",
    work: "../../src/assets/images/work-tech.png",
  };
  return (
    <div className="page-section">
      <h2>sobre mim</h2>
      <div className="about-section">
        <div className="about-header">
          <div className="header-img">
            <img
              src="..\..\src\assets\images\profile-pic.png"
              alt="profile-pic"
            />
          </div>
          <div className="text-header">
            <div className="text-header-name">
              <h1>Alanis Hadama</h1>
              <span>アラニス 浜田</span>
            </div>
            <div className="text-header-info">
              <span className="infos">
                <img src={emoji.pin} alt="flag-BR" />
                Rio de Janeiro - BR
              </span>
              <span className="infos">
                <img src={emoji.study} alt="flag-BR" />
                Dev, estudante
              </span>
              <span className="infos">
                <img src={emoji.work} alt="flag-BR" />
                estagiária em desenvolvimento na&nbsp;
                <a href="https://www2.petros.com.br/" target="_blank">
                  Petros
                </a>
              </span>
            </div>
          </div>
        </div>

        <hr />

        <div className="scrollable-content">
          <div className="intro">
            oii! pode me chamar de Japa 😊 sou desenvolvedora e entusiasta de
            animação e design digital. Eu também...
            <ul>
              <li>atuo como dev full-stack,</li>
              <li>estudo ciência da computação,</li>
              <li>e às vezes posto vídeos sobre o que me inspira por aí.</li>
            </ul>
          </div>

          <div className="interests">
            <h3>outros interesses</h3>
            <ul>
              <li>animação & ilustração</li>
              <li>gatinhos (meus amores!)</li>
              <li>desenvolvimento de jogos</li>
              <li>cosplay, animes e muita música</li>
              <li>games e puzzles</li>
            </ul>
          </div>

          <div className="language">
            <h3>idiomas</h3>
            sou nativa em português <img src={emoji.br} alt="flag-BR" />, me
            viro bem no inglês no dia a dia{" "}
            <img src={emoji.usa} alt="flag-EUA" /> e arranho japonês{" "}
            <img src={emoji.jp} alt="flag-JP" /> e francês{" "}
            <img src={emoji.fr} alt="flag-FR" /> (mais na leitura mesmo).
            <span>
              🤟 estou aprendendo libras também mas está sendo uma luta hahah
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
