import React from 'react'
import { Button } from './Button'

export const ClearButton = ({handleClick}) => {
  return (
    <div>
        <Button onClick={handleClick} text="AC" green/>
    </div>
  )
}
