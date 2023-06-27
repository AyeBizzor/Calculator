import { useEffect, useState } from "react";
import { Display } from "./components/Display";
import { NumberPad } from "./components/NumberPad";
import { OperatorPad } from "./components/OperatorPad";
import { ClearButton } from "./components/ClearButton";
import { ButtonResult } from "./components/ButtonResult";
import { evaluate } from 'mathjs';


function App() {
  const  [display, setDisplay] = useState("0")

    const numericInput = (number) => {
      setDisplay(display === "0" ? number.toString() : display + number)
    };

    const operatorInput = (operator) => {
      setDisplay(display+operator)
    }

    const allClear = (ac) => {
      setDisplay('0')
    }

    const calculateResult = (res) => {
      const calculation = display;
      const result = evaluate(calculation)
      setDisplay(result.toString())
      
    }

    const handleKeyDown = (event) => {
      if (event.key === 'Enter'){
        calculateResult()
        console.log(calculateResult())
      } else if (event.key === 'Escape') {
        allClear();
      } else if (event.key === '+' || event.key === '-' || event.key === '*' || event.key === '/' || event.key === '%' ){
        operatorInput(event.key);

      } else if (/[0-9.]/.test(event.key)){
        numericInput(event.key);
      }
 }
 useEffect(()=> { 
  window.addEventListener('keydown', handleKeyDown)
  return () => {
    window.removeEventListener('keydown', handleKeyDown)
  }
})
    


  return (
    <div> 
      
      <p>Calculadora</p>
      <Display value={display} /> 
      <NumberPad handleClick={numericInput} />
      <OperatorPad handleClick={operatorInput}/>
      <ClearButton handleClick={allClear} />
      <ButtonResult handleClick={calculateResult} />
      </div>
     
  );
}
 
export default App;
