import SectionTitle from "../sectionTitle/SectionTitle";
import Image from "next/image";
import "./information.scss";

export default function Info() {
  return (
    <div className="info">
      <SectionTitle text="Lenguages" />
      <div className="lenguages-info">
        <div className="lengue-icon">
          <Image src="/eua.png" alt="" width={25} height={25} />
          <span> EN basic reading</span>
        </div>
        <div className="lengue-icon">
          <Image src="/br.png" alt="" width={26} height={26} />
          <span> PT-BR Native Speaker</span>
        </div>
      </div>
      <SectionTitle text="Education" />
      <div className="education-info">
        <span className="icon-education">🎓</span>
        <span className="text-education">
          {" "}
          Technologist in Internet Systems - Faculty of Technology META -
          Macapá-AP
        </span>
      </div>
    </div>
  );
}
