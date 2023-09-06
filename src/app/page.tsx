import Experience from "./components/experience/Experience";
import Header from "./components/header/Header";

export default function Home() {
  return (
    <main className="container">
      <Header />
      <Experience />
      <div className="infos">
        <h3>Lenguages</h3>
        <div className="languages-info">
          <span> EN basic reading</span>
          <span> PT-BR Native Speaker</span>
        </div>
        <h3>Education</h3>
        <div className="education-info">
          
          <span>🎓</span>
          <span>
            {" "}
            Technologist in Internet Systems - Faculty of Technology META -
            Macapá-AP
          </span>
        </div>
      </div>
      <div className="buttons">
        <div className="social"></div>
        <button>Contact Me</button>
      </div>
    </main>
  );
}
