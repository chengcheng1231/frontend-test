import React, { useState } from 'react';
import '../../palette.css';
import { addComma } from '../../utils';
import './PriceInput.css';

const PriceInput = ({ value, onChange }) => {
  const priceInputStyle = value === '' ? 'priceInput priceInputError' : 'priceInput';
  const [isInputFocused, setIsInputFocused] = useState(false);
  const handleAddComma = (value) => {
    if (value.includes('.')) {
      const [integer, decimal] = value.split('.');
      return addComma(integer) + '.' + decimal;
    }
    return addComma(value);
  };

  return (
    <>
      <div className="priceInputTitle">入住費用（每人每晚）</div>
      <div className="priceInputContainer">
        <div className="priceInputCurrencyContainer">
          <div className="priceInputCurrency">TWD</div>
        </div>
        <input
          type={isInputFocused ? 'number' : 'text'}
          value={isInputFocused ? value : handleAddComma(value)}
          onChange={onChange}
          className={priceInputStyle}
          onFocus={() => setIsInputFocused(true)}
          onBlur={() => setIsInputFocused(false)}
          placeholder="請輸入費用"
          min="0"
          step="0.1"
        />
      </div>
      {value === '' ? (
        <div className="errorContainer">
          <div className="errorText">不可為空白</div>
        </div>
      ) : null}

      <div className="alertContainer">
        <div className="alertText">輸入 0 表示免費</div>
      </div>
    </>
  );
};

export default PriceInput;
