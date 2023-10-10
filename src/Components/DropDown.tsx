import { useState } from "react";

const DropDown = ({
  setSelectedColor,
}: {
  setSelectedColor: (color: string) => void;
}) => {
  const [selectedOption, setSelectedOption] = useState("Select Color");
  const [showOptions, setShowOptions] = useState(false);

  return (
    <div className="containerDropdown">
      <div
        className="headerDropdown"
        style={{
          backgroundColor: "transparent",
          border: "1px solid black",
          borderRadius: "15px",
          padding: "5px",
          width: "130px",
          textAlign: "center",
          cursor: "pointer",
        }}
        onClick={() => setShowOptions(!showOptions)}
      >
        <div>
          Select Color
          <img
            src="src/assets/menu-burger.png"
            alt="Dropdown Icon"
            style={{
              marginLeft: "5px",
              height: "16px",
            }}
          />
        </div>
      </div>
      <div
        className="optionsSelect"
        style={{
          display: showOptions ? "block" : "none",
          backgroundColor: "red",
          border: "1px solid black",
          borderRadius: "15px",
          padding: "5px",
          width: "100px",
          textAlign: "center",
          cursor: "pointer",
        }}
        onClick={() => {
          setSelectedColor("red");
          setSelectedOption("red");
        }}
      >
        Red
      </div>
      <div
        className="optionsSelect"
        style={{
          display: showOptions ? "block" : "none",
          backgroundColor: "white",
          border: "1px solid black",
          borderRadius: "15px",
          padding: "5px",
          width: "100px",
          textAlign: "center",
          cursor: "pointer",
        }}
        onClick={() => {
          setSelectedColor("white");
          setSelectedOption("white");
        }}
      >
        White
      </div>
      {/* <div
        className="optionsSelect"
        style={{
          display: showOptions ? "block" : "none",
          backgroundColor: "black",
          border: "1px solid black",
          borderRadius: "15px",
          padding: "5px",
          width: "100px",
          textAlign: "center",
          cursor: "pointer",
          color: "white",
        }}
        onClick={() => {
          setSelectedColor("black");
          setSelectedOption("black");
        }}
      >
        Black
      </div> */}
      <div
        className="optionsSelect"
        style={{
          display: showOptions ? "block" : "none",
          backgroundColor: "blue",
          border: "1px solid black",
          borderRadius: "15px",
          padding: "5px",
          width: "100px",
          textAlign: "center",
          cursor: "pointer",
        }}
        onClick={() => {
          setSelectedColor("blue");
          setSelectedOption("blue");
        }}
      >
        Blue
      </div>
      <div
        className="optionsSelect"
        style={{
          display: showOptions ? "block" : "none",
          backgroundColor: "purple",
          border: "1px solid black",
          borderRadius: "15px",
          padding: "5px",
          width: "100px",
          textAlign: "center",
          cursor: "pointer",
        }}
        onClick={() => {
          setSelectedColor("purple");
          setSelectedOption("purple");
        }}
      >
        Purple
      </div>
      <div
        className="optionsSelect"
        style={{
          display: showOptions ? "block" : "none",
          backgroundColor: "yellow",
          border: "1px solid black",
          borderRadius: "15px",
          padding: "5px",
          width: "100px",
          textAlign: "center",
          cursor: "pointer",
        }}
        onClick={() => {
          setSelectedColor("yellow");
          setSelectedOption("yellow");
        }}
      >
        Yellow
      </div>
      <div
        className="optionsSelect"
        style={{
          display: showOptions ? "block" : "none",
          backgroundColor: "green",
          border: "1px solid black",
          borderRadius: "15px",
          padding: "5px",
          width: "100px",
          textAlign: "center",
          cursor: "pointer",
        }}
        onClick={() => {
          setSelectedColor("green");
          setSelectedOption("green");
        }}
      >
        Green
      </div>
      <div
        className="optionsSelect"
        style={{
          display: showOptions ? "block" : "none",
          backgroundColor: "orange",
          border: "1px solid black",
          borderRadius: "15px",
          padding: "5px",
          width: "100px",
          textAlign: "center",
          cursor: "pointer",
        }}
        onClick={() => {
          setSelectedColor("orange");
          setSelectedOption("orange");
        }}
      >
        Orange
      </div>
    </div>
  );
};

export default DropDown;
