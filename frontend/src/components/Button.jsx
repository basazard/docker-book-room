import React from 'react'

export default function Button({children, ...props}) {
  return (
    <button className="py-2 px-4 bg-slate-700 rounded-lg text-white" {...props}>{ children }</button>
  )
}
