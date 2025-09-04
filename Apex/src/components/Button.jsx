import React from 'react'

const Button = ({children, onClick, className}) => {
  return (
    <button className={`primary text-white px-4 py-3 rounded ${className}`} onClick={onClick}>
      {children}
    </button>
  )
}

export default Button
