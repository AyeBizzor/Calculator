import React from "react";
import { Button } from "./Button";

export const NumberPad = ({ handleClick, handleKeyDown }) => {
  return (
    <div className="component-panel-btn">
      <Button text="7" onClick={() => handleClick(7)} onKeyDown={handleKeyDown} gray />
<Button text="8" onClick={() => handleClick(8)} onKeyDown={handleKeyDown} gray />
<Button text="9" onClick={() => handleClick(9)} onKeyDown={handleKeyDown} gray />
<Button text="4" onClick={() => handleClick(4)} onKeyDown={handleKeyDown} gray />
<Button text="5" onClick={() => handleClick(5)} onKeyDown={handleKeyDown}gray/>
<Button text="6" onClick={() => handleClick(6)} onKeyDown={handleKeyDown}gray/>
<Button text="1" onClick={() => handleClick(1)} onKeyDown={handleKeyDown}gray/>
<Button text="2" onClick={() => handleClick(2)} onKeyDown={handleKeyDown}gray/>
<Button text="3" onClick={() => handleClick(3)} onKeyDown={handleKeyDown}gray/>
<Button text="0" onClick={() => handleClick(0)} onKeyDown={handleKeyDown}gray/>
<Button text="." onClick={() => handleClick('.')} onKeyDown={handleKeyDown}gray/>
    </div>
  );
};
