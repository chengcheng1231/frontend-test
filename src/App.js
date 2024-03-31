import React, { useState } from 'react';
import './App.css';
import AgeGroupPriceList from './components/AgeGroupPriceList/AgeGroupPriceList';

function App() {
  // const [value, setValue] = useState('0');
  // const [ageGroup, setAgeGroup] = useState([7, 17]);
  const [result, setResult] = useState([
    { id: 1, ageGroup: [7, 16], price: 9999.99 },
    { id: 2, ageGroup: [0, 20], price: 200 },
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
