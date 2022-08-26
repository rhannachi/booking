import React from 'react'

export type ButtonProps = {
  title: string
}

const Button = ({ title }: ButtonProps) => {
  return (
    <button className="bg-blue-500 rounded-md text-white p-2">
      <span> {title} </span>
    </button>
  )
}

export default Button
