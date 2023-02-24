import React from "react";

export default function PlaceContentCenter({ children, className = "max-w-5xl w-full" }) {
  return (
    <div className="flex items-center justify-center py-5 antialiased">
      <div className={`${className}`}>{children}</div>
    </div>
  );
}
