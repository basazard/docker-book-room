import React from "react";

const Input = React.forwardRef((props, ref) => {
  return (
    <input {...props} ref={ref} className="block w-full p-2.5 text-sm text-slate-900 bg-gray-50 border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-600 focus:border-transparent rounded-lg" />
  );
});

export default Input;
