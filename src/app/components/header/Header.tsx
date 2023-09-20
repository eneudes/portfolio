import Image from "next/image";
import  "./header.scss";

export default function Header() {
  return(
    <header>
          
        <div>
          <h1>Hi, i´m Eneudes! 👋</h1>
          <h2>Software Developer</h2>
        </div>
        <Image
            src="/profile1.jpeg"
            alt="foto perfil"
            width={225}
            height={225}
            priority
          />
      </header>
  )
};
