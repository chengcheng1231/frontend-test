import './App.css';
import logo from './logo.svg';
import { getNumberIntervals } from './utils';
function App() {
  const { overlap, notInclude } = getNumberIntervals([
    [6, 11],
    [5, 8],
    [17, 20],
    [7, 7],
    [14, 17],
  ]);
  console.log(overlap, notInclude);
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
