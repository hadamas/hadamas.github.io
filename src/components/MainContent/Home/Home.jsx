import "./Home.css";

function Home() {
  return (
    <div className="page-section">
      <div className="home-section">
        <h1>
          oii! <span id="myName">eu sou a Alanis</span>
        </h1>
        <p>estudante & desenvolvedora</p>
        <button class="resume-button">
          <a
            href="https://drive.google.com/file/d/123nAvZy0MaVRYfvFeegJDNcl5zXPsl6_/view?usp=sharing"
            target="_blank"
          >
            currículo
          </a>
          <i class="bi bi-arrow-up-right"></i>
        </button>
      </div>
    </div>
  );
}

export default Home;
