import React from "react";

export default function Label({ value, children, ...props }) {
  return (
    <label {...props} className="block mb-1 text-base font-medium text-gray-900 dark:text-white">
      {value || children}
    </label>
  );
}
