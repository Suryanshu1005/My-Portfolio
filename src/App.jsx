import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";
import { About, Contact, Experience,
   //Feedbacks, 
   Hero, Tech, 
  Works, StarsCanvas , Navbar, Resume } from './components';


const App = () => {

  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat 
            bg-center">
              <Navbar />
              <Hero />
        </div>
        <About />
        
        <Experience />
        <Tech />
        <Works />
        <div className="relative z-0">
          <Resume />
          <Contact />
          <StarsCanvas  />
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App
