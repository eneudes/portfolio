import Header from "./components/header/Header";

export default function Home() {
  return (
    <main>
      <Header/>
      
      <div className="experience">
        <h3>Experience</h3>
        <p>
          More than 3 years working as a Software Developer, always
          professionalizing the search for new challenges...
        </p>

        <div className="experiece-time"></div>
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
          <div className="social">

          </div>
          <button>Contact Me</button>
        </div>
      </div>
    </main>
  );
}
