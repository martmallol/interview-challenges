import './App.css';
import React, { useEffect, useState } from 'react';

const RANDOM_FACTS_URL = `https://catfact.ninja/fact`;
const RANDOM_CAT_URL_PREFIX = `https://cataas.com/cat/says/`;

function App() {
  const [randomFact, setRandomFact] = useState('lorem');
  const [randomCatImage, setRandomCatImage] = useState();

  // Fetch API
  useEffect(() => {
    // Random fact fetch
    fetch(RANDOM_FACTS_URL)
      .then((response) => response.json())
      .then((data) => {
        const { fact } = data;
        setRandomFact(fact);
        const catMsg = fact.split(' ')[0];
        console.log(catMsg);
        fetch(`${RANDOM_CAT_URL_PREFIX}${catMsg}?json=true`)
          .then((response) => response.json())
          .then((data) => {
            console.log(data);
            setRandomCatImage(`https://cataas.com/${data.url}`);
          });
        // setRandomCatImage(`${RANDOM_CAT_URL_PREFIX}${catMsg}`)
      });
  }, []);

  // Random cat
  console.log(randomFact);
  // CAT_MSG = randomFact.split(' ', 1);
  return (
    <div className="App">
      <header className="App-header">
        <h1>App de gatitos</h1>
        {randomFact && <h1>{randomFact}</h1>}
        {randomCatImage && (
          <img src={randomCatImage} alt="A random image of a cute cat"></img>
        )}
      </header>
    </div>
  );
}

export default App;
