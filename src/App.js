import { useState } from 'react';
import './App.css';
import AgeGroupSelect from './components/AgeGroupSelect/AgeGroupSelect';
import PriceInput from './components/PriceInput/PriceInput';

function App() {
  const [value, setValue] = useState('0');
  const [ageGroup, setAgeGroup] = useState([7, 17]);
  return (
    <div>
      <PriceInput onChange={(e) => setValue(e.target.value)} value={value} />
      <AgeGroupSelect isOverlap={false} ageGroup={ageGroup} setAgeGroup={(e) => setAgeGroup(e)} />
    </div>
  );
}

export default App;
