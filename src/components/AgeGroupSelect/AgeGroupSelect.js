import React, { useState } from 'react';
import ErrorContainer from '../../elements/ErrorContainer/ErrorContainer';
import InputTitle from '../../elements/InputTitle/InputTitle';
import '../../palette.css';
import './AgeGroupSelect.css';

const AgeGroupSelect = ({ ageGroup, setAgeGroup, isOverlap }) => {
  const [startRange, setStartRange] = useState([0, ageGroup[1]]);
  const [endRange, setEndRange] = useState([ageGroup[0], 20]);

  const handleStartChange = (updateStartAge) => {
    setAgeGroup([Number(updateStartAge), ageGroup[1]]);
    setEndRange([Number(updateStartAge), 20]);
  };

  const handleEndChange = (updateEndAge) => {
    setAgeGroup([ageGroup[0], Number(updateEndAge)]);
    setStartRange([0, Number(updateEndAge)]);
  };

  const generateStartRange = () => {
    const options = [];
    for (let i = startRange[0]; i <= startRange[1]; i++) {
      options.push(
        <option key={i} value={i}>
          {i}
        </option>
      );
    }
    return options;
  };

  const generateEndRange = () => {
    const options = [];
    for (let i = endRange[0]; i <= endRange[1]; i++) {
      options.push(
        <option key={i} value={i}>
          {i}
        </option>
      );
    }
    return options;
  };

  return (
    <div>
      <InputTitle title="年齡" />
      <div className="ageSelectContainer">
        <select
          key={'start'}
          value={ageGroup[0]}
          onChange={(e) => handleStartChange(e.target.value)}
          className={'ageSelect ageSelectStart' + (isOverlap ? ' ageSelectError' : '')}
          style={{ dropdownIndicator: { display: 'none' } }}
        >
          {generateStartRange()}
        </select>
        <div className="separator">~</div>
        <select
          key={'end'}
          value={ageGroup[1]}
          onChange={(e) => handleEndChange(e.target.value)}
          className={'ageSelect ageSelectEnd' + (isOverlap ? ' ageSelectError' : '')}
        >
          {generateEndRange()}
        </select>
      </div>
      {isOverlap ? <ErrorContainer errorText="年齡區間不可重疊" /> : null}
    </div>
  );
};

export default AgeGroupSelect;
