import React from 'react'
import { Button } from './Button'

export const ButtonResult = ({handleClick, handleKeyDown}) => {
  return (
    <div>

        <Button text={'='} onClick={() => handleClick('=')} onKeyDown={handleKeyDown} />
    </div>
  )
}
