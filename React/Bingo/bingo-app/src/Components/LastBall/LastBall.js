import './LastBall.css';
import React from 'react';
import Ball from '../Ball/Ball';

const LastBall = ({ balls, number, inUse }) => {
  const ballNumber = balls.length > 0 ? number : 'None yet!';

  return (
    <div className="rightFooter">
      <Ball number={ballNumber} inUse={inUse} />
    </div>
  );
};

export default LastBall;
