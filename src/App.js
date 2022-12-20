
import { useState } from 'react';
import './App.css';
import Home from './Home';
// import axios from 'axios';
// import Na from './Names.json'

function App() {
 
  

  return (
    <div className="App">

      <Home names={'ayman '} age={22} mother={'sahra '} father={"mohamed"}/>
      {/* <Home mother={'sahra '} father={"mohamed"}/> */}


      </div>

   
      
  );
}

export default App;
