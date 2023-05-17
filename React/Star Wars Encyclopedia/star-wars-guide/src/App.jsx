import { useState, useEffect } from 'react'
import './App.css'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// pages
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import CharacterPage from './pages/CharacterPage';

// components
import Navbar from './components/Navbar';

const SWAPI_PREFIX = `https://swapi.dev/api/people/`;

function App() {
  const [SWCharacters, setSWCharacters] = useState(null);

  useEffect( ()  => { 
    const getCharacters = async () => {
      let charactersInfo = [];
      for(let i = 1; i <= 10; i++) {
        const res = await fetch(`${SWAPI_PREFIX}${i}`);
        const data = await res.json();
        const character = await { 
          name: data.name,
          height: data.height,
          mass: data.mass,
          birth_year: data.birth_year
        };
        charactersInfo.push(character);
      }
      console.log(charactersInfo);
      // Podria usar Promise.all tambien.
      setSWCharacters(charactersInfo);
    }  

    getCharacters();
  },[]);
  

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={ <Home SWCharacters={SWCharacters} />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/character/:id" element={<CharacterPage />} />
      </Routes>
    </Router>
  )
}

export default App;

/* 
    
 */