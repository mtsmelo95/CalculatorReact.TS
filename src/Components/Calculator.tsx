import React, { useState } from 'react';
import Button from './ButtonProps';
import Display from './Display';

const Calculator: React.FC = () => {
  const [displayValue, setDisplayValue] = useState<string>('0');

  const handleButtonClick = (value: string) => {
    if (value === 'C') {
      setDisplayValue('0');
    } else if (value === '=') {
      try {
        setDisplayValue(eval(displayValue).toString());
      } catch (error) {
        setDisplayValue('Error');
      }
    } else {
      setDisplayValue(displayValue === '0' ? value : displayValue + value);
    }
  };

  const renderButton = (value: string) => (
    <Button key={value} onClick={() => handleButtonClick(value)} value={value} />
  );

  return (
    <div className="calculator">
      <Display value={displayValue} />
      <div className="buttons">
        {[7, 8, 9, '/', 4, 5, 6, '*', 1, 2, 3, '-', 'C', 0, '.', '='].map((value) =>
          renderButton(value.toString())
        )}
      </div>
    </div>
  );
};

export default Calculator;