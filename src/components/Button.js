import React from 'react'

export const Button = ({text, onClick}) => {
    const handleClick = () => {
        onClick();
    }
    const handleKeyDown = (e) => {
        const numeros = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.']
        if (e.key === 'Enter' || numeros.includes(e.key)) {
            onClick();
        }
        /* Verificamos si la tecla presionada es "Enter" o si se encuentra en el array  */
    }


  return (
    <div>
        <button onClick={handleClick} onKeyDown={handleKeyDown}  > {text} </button>
    </div>
  )
}
