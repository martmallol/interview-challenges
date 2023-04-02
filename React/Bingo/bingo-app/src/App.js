import './App.css';
import Board from './Components/Board/Board';
import Ball from './Components/Ball/Ball';
import { useState } from 'react';

let ballNumbers = [];
const fromToArray = (from,to) => {
  let arr = [];
  for(let i = 0; from + i <= to; i++) {
    arr.push(from+i);
  }
  return arr;
} 

let ballRows = [];
const divideInRows = (arr) => {
  let newArr = [];
  for(let i = 0; i*10 < arr.length; i++) {
    let subArr = arr.slice(i*10, (i+1)*10);
    newArr.push(subArr);
  }
  return newArr;
}

let malleableBalls = [];

function App() { // 2:25MIN
  const [lastBall, setLastBall] = useState(-1);
  const [startedPlaying, setStartedPlaying] = useState(false);

  ballNumbers = fromToArray(1,90);
  ballRows = divideInRows(ballNumbers);
  malleableBalls = ballNumbers;

  const makeBallValid = (number) => {

  }

  const makeAllBallsInvalid = () => {

  }

  const getRandomBall = () => {
    const randomIndex = Math.floor(Math.random() * malleableBalls.length);
    const ball = malleableBalls[randomIndex];
    malleableBalls.splice(randomIndex, 1); // I think it doesn't work
    // makeBallValid(ball);
    return ball;
  }

  const handleNextBall = () => {
    let nextBall = getRandomBall();
    setLastBall(nextBall);
    console.log(malleableBalls.length);
    setStartedPlaying(true);
  }

  const handleRestart = () => {
    
  }

  // Restart game
  document.addEventListener('keyup', event => {
    if (event.code === 'Space') {
      console.log('Space pressed');
      
      // Handling restart
      // makeAllBallsInvalid();
      setStartedPlaying(false);
      setLastBall(-1);
    }
  })

  // Play game (right arrow key)
  document.addEventListener('keyup', event => {
    if (event.code === 'ArrowRight') {
      handleNextBall();
    }
  })

  return (
    <div className="App">
      <header className="App-header">
        <h2>My bingo app</h2>
        <Board balls={ballRows}/>
        {console.log(ballNumbers)}
        {console.log(ballRows)}
        <footer>
          <div className='leftFooter'>
            <button onClick={handleNextBall}>Play</button>
          </div>
          <div className='rightFooter'>
            <Ball number={lastBall}/>
          </div>

        </footer>
      </header>
    </div>
  );
}

export default App;
