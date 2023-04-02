import React, {useState} from 'react';
import './Ball.css'

function Ball({number, inUse}) {
    return(
        <div className={"ball " + inUse}>
            <span>{number}</span>
        </div>
    );
}

export default Ball;