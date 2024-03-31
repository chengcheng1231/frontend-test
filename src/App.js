import React, { useState } from 'react';
import './App.css';
import AgeGroupPriceList from './components/AgeGroupPriceList/AgeGroupPriceList';
import { getNumberIntervals } from './utils';
function App() {
  const [result, setResult] = useState([
    { id: 1, ageGroup: [7, 16], price: 9999.99 },
    { id: 2, ageGroup: [0, 20], price: 200 },
  ]);

  // To check if there is an overlap in the age group
  const isOverlap = getNumberIntervals(result.map((item) => item.ageGroup)).overlap.length > 0;

  return <AgeGroupPriceList result={result} onChange={(e) => setResult(e)} isOverlap={isOverlap} />;
}

export default App;
