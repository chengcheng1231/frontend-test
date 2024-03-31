import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import AgeGroupSelect from '../AgeGroupSelect/AgeGroupSelect';
import PriceInput from '../PriceInput/PriceInput';
import './AgeGroupPriceList.css';

const AgeGroupPriceList = ({ result, onChange, isOverlap, isIncludeAllAges }) => {
  const handleAddGroupClick = () => {
    if (isIncludeAllAges) return;
    onChange([...result, { id: uuidv4(), ageGroup: [0, 20], price: 0 }]);
  };

  const handleRemoveGroupClick = (id) => {
    onChange(result.filter((item) => item.id !== id));
  };

  const handleAgeGroupChange = (id, updateAgeGroup) => {
    onChange(
      result.map((item) => {
        if (item.id === id) {
          return { ...item, ageGroup: updateAgeGroup };
        }
        return item;
      })
    );
  };

  const handlePriceChange = (id, updatePrice) => {
    onChange(
      result.map((item) => {
        if (item.id === id) {
          return { ...item, price: updatePrice === '' ? '' : Number(updatePrice) };
        }
        return item;
      })
    );
  };

  return (
    <div>
      {result.map((item, index) => (
        <div className="ageGroupPriceListContainer" key={item.id}>
          <div className="groupHeader">
            <h3 className="ageGroupPriceListTitle">價格設定 - {index + 1}</h3>
            {index !== 0 && (
              <div className="deleteGroupContainer" onClick={() => handleRemoveGroupClick(item.id)}>
                <div className="deleteGroupClose" />
                <div className="deleteGroupButton">移除</div>
              </div>
            )}
          </div>
          <div className="ageGroupPriceListInputContainer">
            <div className="ageGroupPriceListPortion">
              <AgeGroupSelect
                isOverlap={isOverlap}
                ageGroup={item.ageGroup}
                setAgeGroup={(updateAgeGroup) => handleAgeGroupChange(item.id, updateAgeGroup)}
              />
            </div>
            <div className="ageGroupPriceListPortion">
              <PriceInput onChange={(updatePrice) => handlePriceChange(item.id, updatePrice)} value={item.price} />
            </div>
          </div>
          {result.length - 1 !== index && <div className="groupSeparator" />}
        </div>
      ))}
      <div className="addGroupOuterContainer">
        <div
          className={isIncludeAllAges ? 'addGroupContainer disabledAddGroupContainer' : 'addGroupContainer'}
          onClick={() => handleAddGroupClick()}
        >
          <div className={isIncludeAllAges ? 'addGroupPlus disabledAddGroupPlus' : 'addGroupPlus'} />
          <div className={isIncludeAllAges ? 'addGroupButton disabledAddGroupButton' : 'addGroupButton'}>
            新增價格設定
          </div>
        </div>
      </div>
    </div>
  );
};

export default AgeGroupPriceList;
