import React from 'react'

export default function Select( { children, className,  ...props}) {
  return (
    <select {...props} className={`${className} block w-full px-2 py-3 bg-gray-50 border border-gray-300 text-slate-900 text-base rounded-lg focus:ring-blue-500 focus:border-blue-500  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500`}>
        { children }      
    </select>
  )
}
