import React, { ButtonHTMLAttributes } from 'react'

interface ButtonProps {
  buttonText: string
  type: "button" | "submit" | "reset" | undefined
}

function Button(props: ButtonProps) {
  return (
    <button className='primary-button' type={props.type}>{props.buttonText}</button>
  )
}

export default Button