import ExperienceTime from "../experience-time/ExperienceTime";
import SectionTitle from "../sectionTitle/SectionTitle";
import "./experience.scss";

export default function Experience() {
  return (
    <div className="experience">
      <SectionTitle text="Experience"/>   
      <p>
        More than 3 years working as a Software Developer, always
        professionalizing the search for new challenges...
      </p>
      <div className="experiece-time">
        <ExperienceTime src="/icon-react.svg" time="3 anos" size="80%"/>
        <ExperienceTime src="/icon-js.svg" time="3 anos"/>
        <ExperienceTime src="/icon-ts.svg" time="2 anos"/>
        <ExperienceTime src="/icon-html.svg" time="5 anos"/>
        <ExperienceTime src="/icon-css.svg" time="5 anos"/>
      </div>
    </div>
  );
}
