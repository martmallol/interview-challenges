import './LastBall.css';
import React from 'react';
import Ball from '../Ball/Ball';

const LastBall = ({ balls }) => {
  const ballNumber = balls.length > 0 ? balls[balls.length - 1] : 'None yet!';

  return (
    <div className="rightFooter">
      <Ball number={ballNumber} inUse={true} />
    </div>
  );
};

export default LastBall;
