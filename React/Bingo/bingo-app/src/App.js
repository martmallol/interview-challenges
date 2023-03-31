import './App.css';
import Board from './Components/Board/Board';
import Ball from './Components/Ball/Ball';

function App() { // 25MIN
  return (
    <div className="App">
      <header className="App-header">
        <h1>My bingo app</h1>
        <Board balls={90}/>
      </header>
    </div>
  );
}

export default App;
