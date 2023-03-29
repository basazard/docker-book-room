import React from "react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-white border-b border-bg-gray-200 py-4 px-5 flex justify-between items-center">
      <div className="text-slate-900 font-semibold">Booking Meeting Room</div>
      <ul className="flex gap-2 text-slate-900 tracking-tighter">
        <li>
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? "bg-slate-700 text-white py-2 px-4 rounded-lg" : "py-2 px-4")}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/event"
            className={({ isActive }) => (isActive ? "bg-slate-700 text-white p-2 px-4 rounded-lg" : "py-2 px-4")}
          >
            Event
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
