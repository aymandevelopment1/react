// import { Routes } from 'react-router-dom';
import './App.css'
import About from './components/About';
import Bot from './components/Bot';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Skills from './components/Skills';
import Hireme from './components/Hireme';
import Contact from './components/Contact';
import Projects from './components/Projects';
// import footer from './components/Footer';
import Footer from './components/Footer';
// import { useState } from 'react';
import { ThemeProvider } from 'next-themes';



function App() {

 
  return (
      <  >
      <ThemeProvider>

      <Navbar />
 <Bot/>
   <Hero/>
   <About/>
   <Skills/>
   <Hireme/>
   <Projects/>
   <Contact/>
   <Footer/>
      </ThemeProvider>


  </>

  )


 


}

export default App;
