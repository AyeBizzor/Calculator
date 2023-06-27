import React from 'react'
import { Button } from './Button'

export const OperatorPad = ({handleClick, handleKeyDown}) => {
  return (
    <div>
        <Button text="+" onClick={() => handleClick("+")} onKeyDown={handleKeyDown} />
        <Button text="-" onClick={() => handleClick("-")} onKeyDown={handleKeyDown} />
        <Button text="*" onClick={() => handleClick("*")} onKeyDown={handleKeyDown} />
        <Button text="/" onClick={() => handleClick("/")} onKeyDown={handleKeyDown} />
        <Button text="%" onClick={() => handleClick("%")} onKeyDown={handleKeyDown} />
        
    </div>
  )
}
