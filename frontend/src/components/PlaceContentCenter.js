import React from "react";
import { Helmet } from 'react-helmet';

export default function PlaceContentCenter({
  children,
  className = "max-w-7xl w-full",
}) {
  return (
    <div>
      <Helmet>
        <title>Booking Room</title>
      </Helmet>

      <div className="flex items-center justify-center py-5 antialiased">
        <div className={`${className}`}>{children}</div>
      </div>
    </div>
  );
}
