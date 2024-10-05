import React from 'react';
import './Board.css';
import Ball from '../Ball/Ball';

const Board = ({ selectedBalls, numberOfBalls }) => {
  const boardBalls = Array.from({ length: numberOfBalls }, (_, i) => i + 1);

  return (
    <div className="board">
      <h4>I'm the board! I possess {numberOfBalls} balls!</h4>
      <div className="table">
        {boardBalls.map((ballNumber) => (
          <Ball
            number={ballNumber}
            inUse={selectedBalls.includes(ballNumber)}
          />
        ))}
      </div>
    </div>
  );
};

export default Board;
