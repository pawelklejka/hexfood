import React from 'react'

interface ButtonProps {
  buttonText: string
}

function Button(props: ButtonProps) {
  return (
    <button className='primary-button'>{props.buttonText}</button>
  )
}

export default Button