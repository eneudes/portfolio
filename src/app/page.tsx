import Buttons from "./components/buttons/Buttons";
import Experience from "./components/experience/Experience";
import Header from "./components/header/Header";
import Information from "./components/information/Information";

export default function Home() {
  return (
    <main className="container">
      <Header />
      <Experience />
      <Information />
      <Buttons/>
    </main>
  );
}
