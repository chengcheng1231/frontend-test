import React from 'react';
import AgeGroupSelect from '../AgeGroupSelect/AgeGroupSelect';
import PriceInput from '../PriceInput/PriceInput';
import './AgeGroupPriceList.css';

const AgeGroupPriceList = ({ result, onChange, isOverlap }) => {
  const handleAddGroupClick = () => {
    onChange([...result, { id: result.length + 1, ageGroup: [0, 20], price: 0 }]);
  };

  const handleRemoveGroupClick = (id) => {
    onChange(result.filter((item) => item.id !== id));
  };

  const handleAgeGroupChange = (id, e) => {
    onChange(
      result.map((item) => {
        if (item.id === id) {
          return { ...item, ageGroup: e };
        }
        return item;
      })
    );
  };

  const handlePriceChange = (id, e) => {
    onChange(
      result.map((item) => {
        if (item.id === id) {
          return { ...item, price: e.target.value === '' ? '' : Number(e.target.value) };
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
            <div style={{ flex: 1 }}>
              <AgeGroupSelect
                isOverlap={isOverlap}
                ageGroup={item.ageGroup}
                setAgeGroup={(e) => handleAgeGroupChange(item.id, e)}
              />
            </div>
            <div style={{ flex: 1 }}>
              <PriceInput onChange={(e) => handlePriceChange(item.id, e)} value={item.price} />
            </div>
          </div>
          {result.length - 1 !== index && <div className="groupSeparator" />}
        </div>
      ))}
      <div className="addGroupOuterContainer">
        <div className="addGroupContainer" onClick={() => handleAddGroupClick()}>
          <div className="addGroupPlus" />
          <div className="addGroupButton">新增價格設定</div>
        </div>
      </div>
    </div>
  );
};

export default AgeGroupPriceList;
