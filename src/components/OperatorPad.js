import React from 'react'
import { Button } from './Button'

export const OperatorPad = ({handleClick, handleKeyDown}) => {
  return (
    <div>
        <Button text="+" onClick={() => handleClick("+")} onKeyDown={handleKeyDown} orange />
        <Button text="-" onClick={() => handleClick("-")} onKeyDown={handleKeyDown} orange />
        <Button text="*" onClick={() => handleClick("*")} onKeyDown={handleKeyDown} orange />
        <Button text="/" onClick={() => handleClick("/")} onKeyDown={handleKeyDown} orange />
        <Button text="%" onClick={() => handleClick("%")} onKeyDown={handleKeyDown} orange />
        
    </div>
  )
}
