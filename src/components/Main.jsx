import Herosec from "./Main-Components/Herosec";
import About from "./Main-Components/About";
import Resume from "./Main-Components/Resume";
import Services from "./Main-Components/Services";
import Skills from "./Main-Components/Skills";
import Portfolio from "./Main-Components/Portfolio";
import Gallery from "./Main-Components/Gallery";
import ClientLogos from "./Main-Components/Clientlogos";
import Contact from "./Main-Components/Contact";
export default function Main({ route }) {
  return (
    <div>
      {/* <Pageloader/> */}
      <Herosec />
      <About />
      <Resume />
      <Services />
      <Skills />
      <Portfolio />
      <Gallery />
      <ClientLogos />
      <Contact />
    </div>
  );
}
