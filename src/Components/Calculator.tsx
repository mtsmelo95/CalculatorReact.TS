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
      <a
        href="https://github.com/mtsmelo95"
        target="_blank"
        rel="noopener noreferrer"
      >
        <button className="btn">
          <svg
            width="40"
            height="40"
            fill="#0092E4"
            xmlns="http://www.w3.org/2000/svg"
            data-name="Layer 1"
            viewBox="0 0 24 24"
            id="github"
          >
            <path d="M12,2.2467A10.00042,10.00042,0,0,0,8.83752,21.73419c.5.08752.6875-.21247.6875-.475,0-.23749-.01251-1.025-.01251-1.86249C7,19.85919,6.35,18.78423,6.15,18.22173A3.636,3.636,0,0,0,5.125,16.8092c-.35-.1875-.85-.65-.01251-.66248A2.00117,2.00117,0,0,1,6.65,17.17169a2.13742,2.13742,0,0,0,2.91248.825A2.10376,2.10376,0,0,1,10.2,16.65923c-2.225-.25-4.55-1.11254-4.55-4.9375a3.89187,3.89187,0,0,1,1.025-2.6875,3.59373,3.59373,0,0,1,.1-2.65s.83747-.26251,2.75,1.025a9.42747,9.42747,0,0,1,5,0c1.91248-1.3,2.75-1.025,2.75-1.025a3.59323,3.59323,0,0,1,.1,2.65,3.869,3.869,0,0,1,1.025,2.6875c0,3.83747-2.33752,4.6875-4.5625,4.9375a2.36814,2.36814,0,0,1,.675,1.85c0,1.33752-.01251,2.41248-.01251,2.75,0,.26251.1875.575.6875.475A10.0053,10.0053,0,0,0,12,2.2467Z"></path>
          </svg>
        </button>
      </a>
    </div>
  );
};

export default Calculator;
