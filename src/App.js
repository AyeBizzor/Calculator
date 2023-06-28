import { useEffect, useState } from "react";
import { Display } from "./components/Display";
import { NumberPad } from "./components/NumberPad";
import { OperatorPad } from "./components/OperatorPad";
import { ClearButton } from "./components/ClearButton";
import { ButtonResult } from "./components/ButtonResult";
import { evaluate } from "mathjs";
import "./estilos.css";
import "./PanelBotones.css";


function App() {
  const [display, setDisplay] = useState("0");

  const numericInput = (number) => {
    setDisplay(display === "0" ? number.toString() : display + number);
  };

  const operatorInput = (operator) => {
    setDisplay(display + operator);
  };

  const allClear = (ac) => {
    setDisplay("0");
  };

  const calculateResult = (res) => {
    const calculation = display;
    const result = evaluate(calculation);
    setDisplay(result.toString());
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      calculateResult();
      console.log(calculateResult());
    } else if (event.key === "Escape") {
      allClear();
    } else if (
      event.key === "+" ||
      event.key === "-" ||
      event.key === "*" ||
      event.key === "/" ||
      event.key === "%"
    ) {
      operatorInput(event.key);
    } else if (/[0-9.]/.test(event.key)) {
      numericInput(event.key);
    }
  };
  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  });

  return (
    <div className="container">

      <div className="containerDisplay">
        <Display value={display} /></div>

      <div className="panel-botones">

        <div className="containerNum">
          {" "}
          <NumberPad handleClick={numericInput} />
        </div>

        <div className="containerOp">
          {" "}
          <OperatorPad handleClick={operatorInput} />
        </div>

        <div className="clearButton">
          {" "}
          <ClearButton handleClick={allClear} />
        </div>

        <div className="resultButton">
          <ButtonResult handleClick={calculateResult} />
        </div>

      </div>

    </div>
  );
}

export default App;
