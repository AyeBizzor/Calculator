import React from 'react'
import './boton.css'

export const Button = ({text, onClick, gray, orange, wide, green}) => {

    const className= [
        "component-button",
        orange ? "orange" : "",
        wide ? "wide" : "",
        gray ? "gray" : "",
        green ? "green" : "",
    ]

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
    <div className={className.join(" ").trim()} >
        <button onClick={handleClick} onKeyDown={handleKeyDown} className='btn' > {text} </button>
    </div>
  )
}
