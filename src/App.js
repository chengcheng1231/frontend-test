import { useState } from 'react';
import './App.css';
import PriceInput from './components/PriceInput/PriceInput';

function App() {
  const [value, setValue] = useState('0');
  return (
    <div>
      <PriceInput onChange={(e) => setValue(e.target.value)} value={value} />
    </div>
  );
}

export default App;
