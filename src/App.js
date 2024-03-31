import React, { useState } from 'react';
import './App.css';
import AgeGroupPriceList from './components/AgeGroupPriceList/AgeGroupPriceList';

function App() {
  // const [value, setValue] = useState('0');
  // const [ageGroup, setAgeGroup] = useState([7, 17]);
  const [result, setResult] = useState([
    { ageGroup: [7, 16], price: 999.99 },
    { ageGroup: [0, 0], price: 0 },
  ]);
  return (
    <div>
      {/* <PriceInput onChange={(e) => setValue(e.target.value)} value={value} />
      <AgeGroupSelect isOverlap={false} ageGroup={ageGroup} setAgeGroup={(e) => setAgeGroup(e)} /> */}
      <AgeGroupPriceList result={result} onChange={(e) => setResult(e)} />
    </div>
  );
}

export default App;
