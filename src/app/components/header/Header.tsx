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
            src="/perfil1.svg"
            alt="foto perfil"
            width={200}
            height={200}
            priority
          />
      </header>
  )
};
