import { useState, useEffect } from 'react'
import './App.css'

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
    <div>
      
      <ul>
        
        {SWCharacters ? (SWCharacters.map((data, index) => (
          <li key={index}>Personaje {index + 1}: {data.name}</li>
        ))) : (
          <p>Cargando datos... </p>
        )}
      </ul>
    </div>
  )
}

export default App;