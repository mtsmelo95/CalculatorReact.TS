import React from "react";
import "./App.css";
import Calculator from "./Components/Calculator";
import DropDown from "./Components/DropDown";
import { useState } from "react";

const App: React.FC = () => {
  const [selectedColor, setSelectedColor] = useState("white");

  document.body.style.backgroundColor = selectedColor;

  return (
    <div className="App">
      <Calculator selectedColor={selectedColor} />
      <div className="dropDown">
        <DropDown setSelectedColor={setSelectedColor} />
      </div>
    </div>
  );
};

export default App;
