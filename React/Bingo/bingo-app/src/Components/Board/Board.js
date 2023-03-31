import React, {useState} from 'react';
import './Board.css'

function Board({balls}) {
    return(
        <p>I'm the board! I possess {balls} balls!</p>
    );
}

export default Board;