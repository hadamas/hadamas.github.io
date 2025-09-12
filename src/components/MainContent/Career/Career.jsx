import "./Career.css";
import { useState } from "react";

function Career() {
  const [developmentList] = useState([
    "JavaScript",
    "React",
    "Vue",
    "HTML/CSS",
    "Python",
    "C",
    "C++",
    "ThreeJS",
  ]);
  const [toolsList] = useState([
    "Git",
    "VS Code",
    "Docker",
    "Node.js",
    "PostgresSQL",
    "Insomnia",
    "Blender",
    "Qlinkview",
  ]);

  return (
    <div className="page-section">
      <h2>perfil profissional</h2>
      <div className="work-section">

        <div className="work-experience">
          <h3>Experiências</h3>
          <ul>
            <li>
              <h6>Estágiaria em desenvolvimento de software</h6>
              <p>09/2024 - Fundação Petrobras de Seguridade Social - PETROS</p>
              <p>Setor de Investimentos</p>
            </li>
            <li>
              <h6>Jovem Aprendiz</h6>
              <p>02/2020 - 12/2020 ELETRONUCLEAR S.A.</p>
              <p>Empresa operária e construtora de usinas termonucleares no Brasil.</p>
            </li>
          </ul>
        </div>

        <div className="education">
          <h3>Formação</h3>
          <ul>
            <li>
              <h6>Bacheraldo em Ciência da Computação</h6>
              <p>02/2024 - Centro Federal de Educação Tecnológica - CEFET/RJ</p>
              <p>Cursando</p>
            </li>
            <li>
              <h6>Trilha Desenvolvimento Front-End</h6>
              <p>2023 - Programa SantanderCoders (ADA)</p>
            </li>
          </ul>
        </div>

        <div className="skill-container">
          <div className="development">
            <h3>Desenvolvimento</h3>
            <div className="work-button-itens">
              {developmentList.map((skill, index) => (
                <button key={index} className="work-button">
                  {skill}
                </button>
              ))}
            </div>
          </div>
          <div className="tools">
            <h3>Ferramentas</h3>
            <div className="work-button-itens">
              {toolsList.map((tool, index) => (
                <button key={index} className="work-button">
                  {tool}
                </button>
              ))}
            </div>
          </div>
        </div>

        
        <p className="small-msg">Veja mais no meu <a href="https://github.com/hadamas?tab=repositories" target="_blank">Github</a></p>
      </div>
      
    </div>
  );
}

export default Career;
