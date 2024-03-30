import './App.css';
import logo from './logo.svg';
import { getNumberIntervals } from './utils';

function App() {
  getNumberIntervals([
    [1, 10],
    [3, 6],
    [5, 6],
  ]);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
