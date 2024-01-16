import Main from './components/Main'
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Resume from './components/Main-Components/Resume';
import Portfolio from './components/Main-Components/Portfolio';
import Gallery from './components/Main-Components/Gallery';
import ClientLogos from './components/Main-Components/Clientlogos';
import Pricing from './components/Main-Components/Pricing';
import Service from './components/Main-Components/Services';
import About from './components/Main-Components/About';
import Skills from './components/Main-Components/Skills';
import Contact from './components/Main-Components/Contact';
import Lsb from './components/Globle-content/Lsb';
import Scrollnav from './components/Globle-content/Scrollnav';
import Rsidemenu from './components/Globle-content/Rsidemenu';
// import Video from './components/Globle-content/Video';
// import { useState } from 'react';
import Settings from './components/Globle-content/Settings';
export default function App() {

  return (
    <>
     
<BrowserRouter>
<div className="App">

<Lsb/>
<Rsidemenu/>
<Scrollnav/>

      {/* <Pageloader/> */} 

        {/* Settings icon */}
        <Settings  />
       <Routes>
      
      
         {/* <Route exact path="/" element={} /> */}
         <Route  path="/" element={<Main route={window.location.pathname} />} />
         <Route  path="/About" element={<About/>} />
         <Route  path="/Resume" element={<Resume/>} />
         <Route  path="/Services" element={<Service/>} />
         <Route  path="/Skills" element={<Skills/>} />
         <Route  path="/Portfolio" element={<Portfolio/>} />
         <Route  path="/Gallery" element={<Gallery/>} />
         <Route  path="/ClientLogos" element={<ClientLogos/>} />
         <Route  path="/Pricing" element={<Pricing/>} />
         <Route  path="/Contact" element={<Contact/>} />
       </Routes>
      
       </div>
     </BrowserRouter>
   
   
    </>
   
  );
}


