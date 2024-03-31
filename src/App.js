import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import './App.css';
import AgeGroupPriceList from './components/AgeGroupPriceList/AgeGroupPriceList';
import { getNumberIntervals } from './utils';

function App() {
  // Initial state
  const [result, setResult] = useState([{ id: uuidv4(), ageGroup: [0, 20], price: 0 }]);

  // To check if there is an overlap in the age group
  const { overlap, notInclude } = getNumberIntervals(result.map((item) => item.ageGroup));
  const isIncludeAllAges = notInclude.length === 0;
  const isOverlap = overlap.length > 0;

  return (
    <AgeGroupPriceList
      result={result}
      onChange={(updateData) => setResult(updateData)}
      isOverlap={isOverlap}
      isIncludeAllAges={isIncludeAllAges}
    />
  );
}

export default App;
