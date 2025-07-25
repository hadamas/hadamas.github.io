import "./Main.css";

function Links() {
  const urls = {
    linkedin: "https://www.linkedin.com/in/alanis-hadama/",
    github: "https://github.com/hadamas",
    instagram: "https://www.instagram.com/alanis.hadama/",
    tiktok: "https://www.tiktok.com/@alanishadama",
  };

  const Button = ({ text, href, iconClass, color }) => {
    return (
      <div className="button-links">
        <a href={href} target="_blank" rel="noopener noreferrer">
          <i className={`bi ${iconClass}`} style={{ color: color, fontSize: '20px' }} />
          {text}
        </a>
      </div>
    );
  };

  return (
    <div className="page-section">
      <h2>contato</h2>
      <div className="icon-grid-links">
        <Button
          text="linkedin"
          iconClass="bi-linkedin"
          href={urls.linkedin}
          color="#0077B5"
        />
        <Button
          text="github"
          iconClass="bi-github"
          href={urls.github}
          color="#89838fff"
        />
        <Button
          text="instagram"
          iconClass="bi-instagram"
          href={urls.instagram}
          color="#E1306C"
        />
        <Button
          text="tiktok"
          iconClass="bi-tiktok"
          href={urls.tiktok}
          color="#884bb1ff"
        />
      </div>
      <div className="small-message-links">
        <p>
        Vamos conversar! <br />
        Curte trocar ideia sobre tech, projetos criativos ou só bater um papo
        geek? <br />
        É só chamar, tô sempre online por aqui ☕💻 <br />
      </p>
      <span id="email">alanis.hadama@gmail.com </span>
      </div>
      
    </div>
  );
}

export default Links;
