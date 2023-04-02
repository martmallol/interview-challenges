import React, {useState} from 'react';
import './Board.css'
import Ball from '../Ball/Ball';
function Board({balls}) {
    return(
        <div className='board'>
            <h4>I'm the board! I possess {balls[8][9].number} balls!</h4>
            <div className='table'>
                <tbody>
                    {balls.map((elem) => (
                        <tr>
                            {elem.map((subElem) => (
                                <td>
                                    <Ball number={subElem.number} inUse={subElem.used}/>
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </div>
        </div>
    );
}

export default Board;