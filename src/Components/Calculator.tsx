import { useState } from "react";
import Button from "./ButtonProps";
import Display from "./Display";
import History from "./History";

const Calculator = ({ selectedColor }: { selectedColor: string }) => {
  const [displayValue, setDisplayValue] = useState<string>("0");
  const [history, setHistory] = useState<string[]>([]);
  const [showHistory, setShowHistory] = useState(false);

  const addToHistory = (expression: string) => {
    setHistory([...history, expression]);
  };

  const handleButtonClick = (value: string) => {
    if (value === "C") {
      setDisplayValue("0");
    } else if (value === "=" || value === "Enter") {
      try {
        const result = eval(displayValue).toString();
        setDisplayValue(result);
        addToHistory(`${displayValue} = ${result}`);
      } catch (error) {
        setDisplayValue("Error");
      }
    } else if (value === "%") {
      try {
        const result = (eval(displayValue) / 100).toString();
        setDisplayValue(result);
        addToHistory(`${displayValue} = ${result}`);
      } catch (error) {
        setDisplayValue("Error");
      }
    } else if (value === "√") {
      setDisplayValue(Math.sqrt(parseFloat(displayValue)).toString());
    } else if (value === "x²") {
      setDisplayValue(Math.pow(parseFloat(displayValue), 2).toString());
    } else {
      setDisplayValue(displayValue === "0" ? value : displayValue + value);
    }
  };

  //função para renderizar os botões
  const renderButton = (value: string) => (
    <Button
      key={value}
      onClick={() => handleButtonClick(value)}
      value={value}
    />
  );

  return (
    <div className="calculator-container">
      <div
        className="calculator"
        style={{
          backgroundColor: selectedColor,
          color: selectedColor === "black" ? "white" : "black",
        }}
      >
        <Display value={displayValue} />
        <div className="buttons">
          <Button onClick={() => handleButtonClick("%")} value="%" />
          <Button onClick={() => handleButtonClick("√")} value="√" />
          <Button onClick={() => handleButtonClick("x²")} value="x²" />
          {[
            "C",
            7,
            8,
            9,
            "/",
            4,
            5,
            6,
            "*",
            1,
            2,
            3,
            "-",
            0,
            ".",
            "=",
            "+",
          ].map((value) => renderButton(value.toString()))}
        </div>
        <button
          className="historyButton"
          onClick={() => setShowHistory(!showHistory)}
        >
          {showHistory ? (
            <img src="src/assets/relogio (3).png" />
          ) : (
            <img src="src/assets/relogio (3).png" />
          )}
        </button>
      </div>
      {showHistory && (
        <History history={history} onClear={() => setHistory([])} />
      )}
    </div>
  );
};

export default Calculator;
