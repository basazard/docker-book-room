import React from 'react'

export default function Card({children, className}) {
  return (
    <div className={`bg-white border rounded-lg p-5 shadow-lg ${className}`}>
        {children}
    </div>
  )
}
