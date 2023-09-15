import EmailIcon from "../icons/EmailIcon";
import SocialBtn from "../social-btns/SocialBtn";
import './buttons.scss';

export default function Buttons() {
  return(
    <div className="buttons">
        <SocialBtn />
        <button className="btn-primary">
          Contact Me <EmailIcon />
        </button>
      </div>
  )
};
