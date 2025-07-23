import "./Main.css";
import linkedin from "bootstrap-icons/icons/linkedin.svg";
import github from "bootstrap-icons/icons/github.svg";
import instagram from "bootstrap-icons/icons/instagram.svg";
import tiktok from "bootstrap-icons/icons/tiktok.svg";

function Links() {
  const urls = {
    linkedin: "https://www.linkedin.com/in/alanis-hadama/",
    github: "https://github.com/hadamas",
    instagram: "https://www.instagram.com/alanis.hadama/",
    tiktok: "https://www.tiktok.com/@alanishadama",
  };

  const Button = ({ text, href, icon }) => {
    return (
      <div className="button-links">
        <a href={href} target="_blank" rel="noopener noreferrer">
          <img src={icon} alt={`${text} icon`} className="button-icon-links" />
        </a>
      </div>
    );
  };

  return (
    <div className="page-section">
      <h2>contato</h2>
      <div className="icon-grid-links">
        <Button text="linkedin" icon={linkedin} href={urls.linkedin} />
        <Button text="gitHub" icon={github} href={urls.github} />
        <Button text="instagram" icon={instagram} href={urls.instagram} />
        <Button text="tiktok" icon={tiktok} href={urls.tiktok} />
      </div>
      <p className="small-message-links">
        Vamos conversar! <br />
        Fique à vontade para entrar em contato para colaborações, projetos ou trocar ideia :)
      </p>
    </div>
  );
}

export default Links;
