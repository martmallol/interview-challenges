import './App.css';
import Board from './Components/Board/Board';
import { useState, useEffect } from 'react';
import LastBall from './Components/LastBall/LastBall';
import { getRandomNumberFromOneTo } from './utils/balls';

function App() {
  const numberOfBalls = 90;
  const [selectedBalls, setSelectedBalls] = useState([]);

  const addBall = (ball) => {
    setSelectedBalls((prevBalls) => [...prevBalls, ball]);
  };

  const removeAllBalls = () => {
    setSelectedBalls([]);
  };

  const getRandomBall = () => {
    let ballNumber = getRandomNumberFromOneTo(numberOfBalls);
    while (selectedBalls.includes(ballNumber)) {
      ballNumber = getRandomNumberFromOneTo(numberOfBalls);
    }
    addBall(ballNumber);
  };

  const handleNextBall = () => {
    if (selectedBalls.length !== numberOfBalls) {
      getRandomBall();
    }
  };

  const handleRestart = () => {
    removeAllBalls();
  };

  // Handle key presses for space (restart) and right arrow (play next ball)
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.code === 'Space') {
        handleRestart();
      } else if (event.code === 'ArrowRight') {
        handleNextBall();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []); // Listen for changes in selectedBalls

  return (
    <div className="App">
      <header className="App-header">
        <h2>My bingo app</h2>
        <Board selectedBalls={selectedBalls} numberOfBalls={numberOfBalls} />
        <footer>
          <div className="leftFooter">
            <button onClick={handleNextBall}>Play</button>
          </div>
          <LastBall balls={selectedBalls} />
        </footer>
      </header>
    </div>
  );
}

export default App;
