import React from 'react'

const Button = ({children, onClick}) => (
  <button className='Button' onClick={onClick}>
    {children}
  </button>
)

export {Button}