import Experience from "./components/experience/Experience";
import Header from "./components/header/Header";
import EmailIcon from "./components/icons/EmailIcon";
import Information from "./components/information/Information";

export default function Home() {
  return (
    <main className="container">
      <Header />
      <Experience />
      <Information/>
      <div className="buttons">
        <div className="social"></div>
        <button className="btn-primary">Contact Me <EmailIcon/></button>
      </div>
    </main>
  );
}
