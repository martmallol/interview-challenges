import React from 'react';
import './Board.css';
import Ball from '../Ball/Ball';
function Board({ balls }) {
  return (
    <div className="board">
      <h4>I'm the board! I possess {balls.length} balls!</h4>
      <div className="table">
        {balls.map((ball) => (
          <Ball number={ball.number} inUse={ball.used} />
        ))}
      </div>
    </div>
  );
}

export default Board;
