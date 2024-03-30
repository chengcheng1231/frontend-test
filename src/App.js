import { useState } from 'react';
import './App.css';
import PriceInput from './components/PriceInput/PriceInput';

function App() {
  const [value, setValue] = useState(0);
  return (
    <div>
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
          Learn React
        </a>
      </header> */}
      <PriceInput onChange={(e) => setValue(e.target.value)} value={value} />
    </div>
  );
}

export default App;
