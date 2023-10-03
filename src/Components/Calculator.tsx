import React, { useState } from "react";
import Button from "./ButtonProps";
import Display from "./Display";
import History from "./History";

const Calculator: React.FC = () => {
  const [displayValue, setDisplayValue] = useState<string>("0");
  const [history, setHistory] = useState<string[]>([]);

  const addToHistory = (expression: string) => {
    setHistory([...history, expression]);
  };

  const handleButtonClick = (value: string) => {
    if (value === "C") {
      setDisplayValue("0");
    } else if (value === "=") {
      try {
        const result = eval(displayValue).toString();
        setDisplayValue(result);
        addToHistory(`${displayValue} = ${result}`);
      } catch (error) {
        setDisplayValue("Error");
      }
    } else if (value === "%") {
      setDisplayValue((parseFloat(displayValue) / 100).toString());
    } else if (value === "√") {
      setDisplayValue(Math.sqrt(parseFloat(displayValue)).toString());
    } else if (value === "x²") {
      setDisplayValue(Math.pow(parseFloat(displayValue), 2).toString());
    } else {
      setDisplayValue(displayValue === "0" ? value : displayValue + value);
    }
  };

  const renderButton = (value: string) => (
    <Button
      key={value}
      onClick={() => handleButtonClick(value)}
      value={value}
    />
  );

  return (
    <div className="calculator">
      <Display value={displayValue} />
      <div className="buttons">
        <Button onClick={() => handleButtonClick("%")} value="%" />
        <Button onClick={() => handleButtonClick("√")} value="√" />
        <Button onClick={() => handleButtonClick("x²")} value="x²" />
        {["/", 7, 8, 9, "*", 4, 5, 6, "-", 1, 2, 3, "C", 0, ".", "="].map(
          (value) => renderButton(value.toString())
        )}
      </div>
      <History history={history} onClear={() => setHistory([])} />
    </div>
  );
};

export default Calculator;
