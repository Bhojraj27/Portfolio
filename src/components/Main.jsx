import React, { useEffect, useState } from "react";
import Settings from "./Globle-content/Settings";
import Scrollnav from "./Globle-content/Scrollnav";
import Rsidemenu from "./Globle-content/Rsidemenu";
import Herosec from "./Main-Components/Herosec";
import About from "./Main-Components/About";
import Resume from "./Main-Components/Resume";
import Services from "./Main-Components/Services";
import Skills from "./Main-Components/Skills";
import Portfolio from "./Main-Components/Portfolio";
import Gallery from "./Main-Components/Gallery";
import ClientLogos from "./Main-Components/Clientlogos";
import Contact from "./Main-Components/Contact";
import Video from "./Globle-content/Video";
export default function Main({ route }) {
  const [currentVideo, setVideo] = useState('Videos/video1.mp4')

  // function changeVideo(videos){
  //   setVideo(videos);
  // }
  useEffect(() => {
    // Update video based on route
    const routeToVideoMap = {

      '/About': 'Videos/video1.mp4',
      '/Resume': 'Videos/video1.mp4',
      // Add more mappings for other routes
    };

    setVideo(routeToVideoMap[route] || 'Videos/video1.mp4');
  }, [route]);
  function changeVideo(videos) {
    setVideo(videos);
  }
  return (
    <div>
      <Video video={currentVideo} />
      {/* <Pageloader/> */}

      {/* Settings icon */}
      <Settings clickEvent={changeVideo} />
      <Scrollnav />
      <Rsidemenu />
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
