import React, { useState } from 'react';
import AgeGroupSelect from '../AgeGroupSelect/AgeGroupSelect';
import PriceInput from '../PriceInput/PriceInput';
import './AgeGroupPriceList.css';

const AgeGroupPriceList = () => {
  const [value, setValue] = useState('0');
  const [ageGroup, setAgeGroup] = useState([7, 17]);
  return (
    <div>
      <div className="ageGroupPriceListContainer">
        <div className="groupHeader">
          <h3 className="ageGroupPriceListTitle">價格設定 - 1</h3>
          <div className="deleteGroupContainer" onClick={() => console.log('delete')}>
            <div className="deleteGroupClose" />
            <div className="deleteGroupButton">移除</div>
          </div>
        </div>
        <div className="ageGroupPriceListInputContainer">
          <div style={{ flex: 1 }}>
            <AgeGroupSelect isOverlap={false} ageGroup={ageGroup} setAgeGroup={(e) => setAgeGroup(e)} />
          </div>

          <div style={{ flex: 1 }}>
            <PriceInput onChange={(e) => setValue(e.target.value)} value={value} />
          </div>
        </div>
        <div className="groupSeparator" />
      </div>
      <div className="addGroupContainer" onClick={() => console.log('add')}>
        <div className="addGroupPlus" />
        <div className="addGroupButton">新增價格設定</div>
      </div>
    </div>
  );
};

export default AgeGroupPriceList;
