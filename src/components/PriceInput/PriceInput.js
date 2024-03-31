import React, { useState } from 'react';
import ErrorContainer from '../../elements/ErrorContainer/ErrorContainer';
import InputTitle from '../../elements/InputTitle/InputTitle';
import '../../palette.css';
import { addComma } from '../../utils';
import './PriceInput.css';

const PriceInput = ({ value, onChange }) => {
  const priceInputStyle = value === '' ? 'priceInput priceInputError' : 'priceInput';
  const [isInputFocused, setIsInputFocused] = useState(false);
  const handleAddComma = (value) => {
    if (value === '') {
      return '';
    }

    if (String(value).includes('.')) {
      const [integer, decimal] = String(value).split('.');
      return addComma(integer) + '.' + decimal;
    }
    return addComma(String(value));
  };

  return (
    <div>
      <InputTitle title="入住費用（每人每晚）" />
      <div className="priceInputContainer">
        <div className="priceInputCurrencyContainer">
          <div className="priceInputCurrency">TWD</div>
        </div>
        <input
          type={isInputFocused ? 'number' : 'text'}
          value={isInputFocused ? value : handleAddComma(value)}
          onChange={(e) => onChange(e.target.value)}
          className={priceInputStyle}
          onFocus={() => setIsInputFocused(true)}
          onBlur={() => setIsInputFocused(false)}
          placeholder="請輸入費用"
          min="0"
          step="0.1"
          onKeyDown={(e) => {
            if (e.key === 'e' || e.key === '-' || e.key === '+') {
              e.preventDefault();
            }
            if (e.key === 'Enter') {
              e.target.blur();
            }
          }}
        />
      </div>
      {value === '' ? <ErrorContainer errorText="不可為空白" /> : null}
      <div className="alertContainer">
        <div className="alertText">輸入 0 表示免費</div>
      </div>
    </div>
  );
};

export default PriceInput;
