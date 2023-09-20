import Image from "next/image";
import "./experienceTime.scss";

interface experienceProps{
  src:string;
  time: string;
  size: string;
}
export default function ExperienceTime(props :experienceProps) {
  const divStyle = {
    color: '{props.size}',
  };
  return(
    <div className="box-experience-time">
      <Image
            src={props.src}
            alt=""
            width={40}
            height={40}
          />
          <div className="btn-experience-time">
            <span style={divStyle}>{props.time}</span>
          </div>
    </div>
  )
};
