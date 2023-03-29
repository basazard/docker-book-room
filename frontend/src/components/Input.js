import React from "react";

const Input = React.forwardRef((props, ref) => {
  return (
    <input {...props} ref={ref} className="block w-full px-2 py-2.5 text-base text-slate-900 bg-gray-50 border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-600 focus:border-transparent rounded-lg placeholder:text-red-500/50" />
  );
});

export default Input;
