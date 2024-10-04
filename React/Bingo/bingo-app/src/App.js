import './App.css';
import Board from './Components/Board/Board';
import { useState } from 'react';
import { fromToArray } from './utils/balls';
import LastBall from './Components/LastBall/LastBall';

function App() {
  const numberOfBalls = 90;
  const [lastBall, setLastBall] = useState('None yet!');
  const [balls, setBalls] = useState(fromToArray(1, 90));

  const handleBalls = (balls) => {
    setBalls(balls);
  };

  const makeAllBallsInvalid = () => {
    handleBalls(fromToArray(1, 90));
  };

  const makeBallValid = (ball) => {
    const ballsCopy = [...balls];
    const validBall = {
      number: ball.number,
      used: true,
    };
    ballsCopy[ball.number - 1] = validBall;

    handleBalls(ballsCopy);
  };

  const getRandomBall = () => {
    if (balls.length > 0) {
      const randomIndex = Math.floor(Math.random() * balls.length);
      const ball = balls[randomIndex];
      makeBallValid(ball);
      return ball;
    }
  };

  const handleNextBall = () => {
    if (balls.length > 0) {
      let nextBall = getRandomBall();
      if (nextBall) setLastBall(nextBall.number);
    }
  };

  const handleRestart = () => {
    setLastBall('None yet!');
    makeAllBallsInvalid();
  };

  // Restart game
  document.addEventListener('keydown', (event) => {
    if (event.code === 'Space') {
      console.log('Space pressed');

      // Handling restart
      handleRestart();
    }
  });

  // Play game (right arrow key)
  document.addEventListener('keydown', (event) => {
    if (event.code === 'ArrowRight') {
      console.log('Right arrow pressed');
      handleNextBall();
    }
  });

  return (
    <div className="App">
      <header className="App-header">
        <h2>My bingo app</h2>
        <Board balls={balls} />
        {console.log('balls: ', balls)}
        <footer>
          <div className="leftFooter">
            <button onClick={() => handleNextBall()}>Play</button>
          </div>
          <LastBall
            balls={balls}
            number={lastBall.number}
            inUse={lastBall.inUse}
          />
        </footer>
      </header>
    </div>
  );
}

export default App;
