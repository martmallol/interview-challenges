import './App.css';
import Board from './Components/Board/Board';
import Ball from './Components/Ball/Ball';
import { useState } from 'react';


const fromToArray = (from,to) => {
  let arr = [];
  for(let i = 0; from + i <= to; i++) {
    arr.push({
      number: from+i,
      used: false
     });
  }
  return arr;
}

const divideInRows = (arr) => {
  let newArr = [];
  for(let i = 0; i*10 < arr.length; i++) {
    let subArr = arr.slice(i*10, (i+1)*10);
    newArr.push(subArr);
  }
  return newArr;
}



function App() { // 3:30MIN
  const [lastBall, setLastBall] = useState('None yet!');
  const [ballNumbers, setBallNumbers] = useState(fromToArray(1,90));
  const [ballRows, setBallRows] = useState(divideInRows(ballNumbers));
  // const [malleableBalls, setMalleableBalls] = useState(ballNumbers);

  /*let ballRows = [];
  

  let malleableBalls = [];

  ballNumbers = fromToArray(1,90);
  ballRows = divideInRows(ballNumbers);
  malleableBalls = ballNumbers;
  */

  const makeAllBallsInvalid = () => {
    setBallNumbers(fromToArray(1,90));
    
    
    // let invalidBalls = divideInRows(ballNumbers);
    let arr = ballRows;
    arr.map((subArr) => {
      for(let i = 0; i < subArr.length; i++) {
        subArr[i] = {number: subArr[i].number, used: false};
      }
    });
    console.log("arr")
    console.log(arr)
    setBallRows(arr);

  }

  const makeBallValid = (ball) => {
    let arr = ballRows;
    const validBall = {number: ball.number, used: true};
    arr.map((subArr) => {
      let idx = subArr.indexOf(ball);
      if (idx !== -1) subArr[idx] = validBall;
    });
    setBallRows(arr);
  }

  const getRandomBall = () => {
    const randomIndex = Math.floor(Math.random() * ballNumbers.length);
    const ball = ballNumbers[randomIndex];
    ballNumbers.splice(randomIndex, 1); // It mutates the array!
    console.log('Malleable:' + ballNumbers.length)
    makeBallValid(ball);
    return ball;
  }

  const handleNextBall = () => {
    if(ballNumbers.length > 0) {
      let nextBall = getRandomBall();
      setLastBall(nextBall.number);
    }
  }

  const handleRestart = () => {
    
  }
  
  // Restart game
  document.addEventListener('keyup', event => {
    if (event.code === 'Space') {
      console.log('Space pressed');
      
      // Handling restart
      makeAllBallsInvalid();
      setLastBall('None yet!');
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
        {console.log('ballNumbers' + ballNumbers.length)}
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
