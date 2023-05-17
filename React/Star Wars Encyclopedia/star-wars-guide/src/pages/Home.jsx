import React from 'react';

function Home ({ SWCharacters }) {
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
     );
}

export default Home ;